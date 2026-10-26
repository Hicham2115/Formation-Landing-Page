const SPREADSHEET_ID = "1VgypQffjrKdN1K0nDGkcwFDjZ7ClYU8cMDQorwwSV1E";
const SHEET_NAME = "Feuille 1";

function doPost(event) {
  try {
    const lead = JSON.parse(event.postData.contents);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("Sheet not found");

    sheet.appendRow([
      new Date(),
      lead.name || "",
      lead.profession || "",
      lead.city || "",
      lead.organization || "",
      lead.whatsapp || "",
      lead.email || "",
      lead.intent === "waitlist" ? "Liste d’attente" : "Réservation",
      "Landing page",
      "À contacter",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
