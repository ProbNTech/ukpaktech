import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";
import { createMembershipApplication } from "@/lib/vendorService";

export const runtime = "nodejs";

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID;
const TAB_NAME = "Memberships";

const COUNTRY_LABELS: Record<string, string> = {
  uk: "United Kingdom",
  pakistan: "Pakistan",
};

const hasCityList = (country: string) => country === "uk" || country === "pakistan";

const HEADERS = [
  "Timestamp",
  "Organisation Name",
  "Company Type",
  "Country",
  "City",
  "Website",
  "Short Description",
  "Services",
  "Logo URL",
  // Applicant
  "Contact Name",
  "Contact Email",
  "Contact Phone",
  // Consents
  "Terms Accepted",
  "Membership Terms Accepted",
  "Arbitration Accepted",
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

    // City: UK/Pakistan use the `city` dropdown (with an "other" escape hatch → cityOther).
    // Any other country uses the free-text `cityOther` input directly.
    const city = !hasCityList(body.country)
      ? body.cityOther?.trim() || ""
      : body.city === "other"
      ? body.cityOther?.trim() || ""
      : body.city?.trim() || "";

    const services: string[] = Array.isArray(body.services)
      ? body.services.filter((s: unknown) => typeof s === "string" && s.trim())
      : [];

    // ── Persist as a pending membership application in Supabase ──
    try {
      await createMembershipApplication({
        company_name: body.orgName.trim(),
        website: body.website?.trim() || undefined,
        country: country || undefined,
        city: city || undefined,
        company_type: body.companyType?.trim() || undefined,
        short_description: body.shortDescription?.trim() || undefined,
        services: services.length ? services : undefined,
        logo_url: body.logoUrl?.trim() || undefined,
        contact_name: body.personName?.trim() || undefined,
        contact_email: body.personEmail?.trim() || undefined,
        contact_phone: body.personPhone?.trim() || undefined,
        terms_accepted: !!body.termsAccepted,
        membership_terms_accepted: !!body.membershipTermsAccepted,
        arbitration_accepted: !!body.arbitrationAccepted,
      });
    } catch (dbErr) {
      // Don't lose the application if Supabase isn't reachable — Sheets + email
      // below still capture it. Log loudly so it can be reconciled.
      console.error("Membership Supabase insert failed:", dbErr);
    }

    const values = [
      timestamp,
      body.orgName?.trim() || "",
      body.companyType?.trim() || "",
      country,
      city,
      body.website?.trim() || "",
      body.shortDescription?.trim() || "",
      services.join(", "),
      body.logoUrl?.trim() || "",
      body.personName?.trim() || "",
      body.personEmail?.trim() || "",
      body.personPhone?.trim() || "",
      body.termsAccepted ? "Yes" : "No",
      body.membershipTermsAccepted ? "Yes" : "No",
      body.arbitrationAccepted ? "Yes" : "No",
    ];

    // ── Mirror to Google Sheets (raw submission log — every request, approved or not) ──
    if (SHEET_ID) {
      try {
        await appendRow(SHEET_ID, TAB_NAME, HEADERS, values);
      } catch (sheetErr) {
        console.error("Membership Sheets append failed:", sheetErr);
      }
    }

    // ── Alert the membership team ──
    try {
      const rows: Array<[string, unknown]> = HEADERS.map((h, i) => [h, values[i]]);
      await sendAlert({
        subject: `New membership application: ${body.orgName?.trim() || "Unknown organisation"}`,
        text: `A new membership application has been submitted via the UPTECH website.\n\nPlease review and approve it in the portfolio admin to invite the applicant to complete their full profile.\n\n${renderRowsText(
          rows
        )}`,
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">A new membership application has been submitted via the UPTECH website. Please review and approve it in the portfolio admin to invite the applicant to complete their full profile.</p>${renderRowsHtml(
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
