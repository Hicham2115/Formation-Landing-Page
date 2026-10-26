import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

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

  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL;
  if (!scriptUrl) {
    return NextResponse.json(
      { error: "La connexion Google Sheets n’est pas configurée. Ajoutez l’URL Apps Script au fichier .env.local." },
      { status: 503 },
    );
  }

  try {
    const scriptResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsedLead.data),
      cache: "no-store",
      redirect: "follow",
    });

    if (!scriptResponse.ok) throw new Error("Apps Script request failed.");

    const result: unknown = await scriptResponse.json();
    if (!result || typeof result !== "object" || !("ok" in result) || result.ok !== true) {
      throw new Error("Apps Script did not confirm the lead append.");
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      { error: "Impossible d’enregistrer votre demande pour le moment." },
      { status: 502 },
    );
  }
}
