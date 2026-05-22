import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID!;
const TAB_NAME = "Memberships";

const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom",
  pakistan: "Pakistan",
  other: "Other",
};

const HEADERS = [
  "Timestamp",
  // Organisation
  "Organisation Name",
  "Registration No.",
  "Address",
  "Country",
  "City",
  "Phone",
  "WhatsApp",
  "Website",
  "Employees",
  "Core Products/Services",
  // Industry
  "Sectors",
  "Other Sector",
  // Profile
  "Organisation Profile",
  // Applicant
  "Contact Name",
  "Contact Job Title",
  "Contact Email",
  "Contact Nationality",
  // Consents
  "Terms Accepted",
  "Membership Terms Accepted",
  "Arbitration Accepted",
  // Added later — appended to preserve existing column alignment
  "Contact Phone",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.orgName?.trim()) {
      return NextResponse.json(
        { error: "Organisation name is required." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const country = body.country
      ? COUNTRY_LABELS[body.country] || body.country
      : "";

    // City: form sends `city` for UK/Pakistan list, `cityOther` when "other" is picked
    // (either at country level or city level)
    const city =
      body.country === "other"
        ? body.cityOther?.trim() || ""
        : body.city === "other"
        ? body.cityOther?.trim() || ""
        : body.city?.trim() || "";

    const values = [
      timestamp,
      // Organisation
      body.orgName?.trim() || "",
      body.registrationNo?.trim() || "",
      body.address?.trim() || "",
      country,
      city,
      body.orgPhone?.trim() || "",
      body.whatsapp?.trim() || "",
      body.website?.trim() || "",
      body.employees || "",
      body.coreProducts?.trim() || "",
      // Industry
      Array.isArray(body.selectedSectors) ? body.selectedSectors.join(", ") : "",
      body.otherSector?.trim() || "",
      // Profile
      body.orgProfile?.trim() || "",
      // Applicant
      body.personName?.trim() || "",
      body.personJobTitle?.trim() || "",
      body.personEmail?.trim() || "",
      body.personNationality?.trim() || "",
      // Consents
      body.termsAccepted ? "Yes" : "No",
      body.membershipTermsAccepted ? "Yes" : "No",
      body.arbitrationAccepted ? "Yes" : "No",
      // Added later — appended to preserve existing column alignment
      body.personPhone?.trim() || "",
    ];

    await appendRow(SHEET_ID, TAB_NAME, HEADERS, values);

    try {
      const rows: Array<[string, unknown]> = HEADERS.map((h, i) => [h, values[i]]);

      await sendAlert({
        subject: `New membership application — ${body.orgName?.trim() || "(unknown org)"}`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New membership application submitted via the UPTECH website.</p>${renderRowsHtml(
          rows
        )}`,
        replyTo: body.personEmail?.trim() || undefined,
      });
    } catch (mailErr) {
      console.error("Membership form alert email failed:", mailErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Membership form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
