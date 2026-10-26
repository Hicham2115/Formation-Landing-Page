import { createSign } from "node:crypto";
import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

const spreadsheetId =
  process.env.GOOGLE_SHEETS_SPREADSHEET_ID ??
  "1VgypQffjrKdN1K0nDGkcwFDjZ7ClYU8cMDQorwwSV1E";
const spreadsheetRange = "'Feuille 1'!A:J";

function base64Url(value: string | Buffer) {
  return Buffer.from(value).toString("base64url");
}

async function getGoogleAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const unsignedToken = [
    base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" })),
    base64Url(
      JSON.stringify({
        iss: email,
        scope: "https://www.googleapis.com/auth/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        iat: issuedAt,
        exp: issuedAt + 3600,
      }),
    ),
  ].join(".");
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  const assertion = `${unsignedToken}.${base64Url(signer.sign(privateKey))}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!tokenResponse.ok) throw new Error("Google authentication failed.");
  const tokenData = (await tokenResponse.json()) as { access_token?: string };
  if (!tokenData.access_token) throw new Error("Google did not return an access token.");
  return tokenData.access_token;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Requête non autorisée." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }

  const parsedLead = leadSchema.safeParse(body);
  if (!parsedLead.success) {
    return NextResponse.json({ error: "Vérifiez les champs du formulaire." }, { status: 400 });
  }

  if (
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
    !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  ) {
    return NextResponse.json(
      {
        error:
          "La connexion Google Sheets n’est pas configurée. Ajoutez les identifiants du compte de service au fichier .env.local.",
      },
      { status: 503 },
    );
  }

  if (!spreadsheetId) {
    return NextResponse.json({ error: "La réception des demandes n’est pas configurée." }, { status: 503 });
  }

  try {
    const accessToken = await getGoogleAccessToken();
    const lead = parsedLead.data;
    const row = [
      new Date().toISOString(),
      lead.name,
      lead.profession,
      lead.city,
      lead.organization,
      lead.whatsapp,
      lead.email,
      lead.intent === "waitlist" ? "Liste d’attente" : "Réservation",
      "Landing page",
      "À contacter",
    ];
    const appendUrl = new URL(
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(spreadsheetId)}/values/${encodeURIComponent(spreadsheetRange)}:append`,
    );
    appendUrl.searchParams.set("valueInputOption", "RAW");
    appendUrl.searchParams.set("insertDataOption", "INSERT_ROWS");

    const appendResponse = await fetch(appendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values: [row] }),
      cache: "no-store",
    });

    if (!appendResponse.ok) throw new Error("Google Sheets append failed.");
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json({ error: "Impossible d’enregistrer votre demande pour le moment." }, { status: 502 });
  }
}
