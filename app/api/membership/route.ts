import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";
import { renderRowsHtml, renderRowsText, sendAlert } from "@/lib/mailer";

const SHEET_ID = process.env.MEMBERSHIP_SHEET_ID!;

/** Map membership type slugs to readable sheet tab names */
const MEMBERSHIP_TAB_NAMES: Record<string, string> = {
  "chairmans-circle": "Chairman's Circle",
  corporate: "Corporate",
  "sme-scaleup": "SME Scale-up",
  startup: "Startup",
  associates: "Associates",
  academic: "Academic Institutions",
  individual: "Individual",
};

const HEADERS = [
  "Timestamp",
  "Membership Type",
  // Organisation
  "Organisation Name",
  "Address",
  "Postcode",
  "Country",
  "Organisation Phone",
  "Website",
  "Revenue",
  "Employees",
  "Core Products/Services",
  "Website Link",
  "Publicly Listed",
  "Member Directory",
  "Mailing List",
  // Industry
  "Selected Sectors",
  "Other Sector",
  // Locations
  "UK Offices",
  "Other UK City",
  "Pakistan Offices",
  "Other Pakistan City",
  "UK Employees",
  "Pakistan Employees",
  // Profile
  "Organisation Profile",
  // CEO
  "CEO First Name",
  "CEO Last Name",
  "CEO Job Title",
  "CEO Nationality",
  "CEO Email",
  "CEO Phone",
  "CEO Mobile",
  "CEO LinkedIn",
  // Primary Contact
  "Primary First Name",
  "Primary Last Name",
  "Primary Job Title",
  "Primary Nationality",
  "Primary Email",
  "Primary Phone",
  // Secondary Contact
  "Secondary First Name",
  "Secondary Last Name",
  "Secondary Job Title",
  "Secondary Email",
  "Secondary Phone",
  "Secondary Mobile",
  // Pakistan Contact
  "Pakistan First Name",
  "Pakistan Last Name",
  "Pakistan Job Title",
  "Pakistan Email",
  "Pakistan Phone",
  "Pakistan Address",
  // Referrer
  "Referrer Name",
  "Referrer Organisation",
  "Referrer Email",
  "Referrer Phone",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation for required fields
    if (!body.orgName?.trim()) {
      return NextResponse.json(
        { error: "Organisation name is required." },
        { status: 400 }
      );
    }

    const tabName = body.membershipType
      ? MEMBERSHIP_TAB_NAMES[body.membershipType] || body.membershipType
      : "Applications";
    const timestamp = new Date().toISOString();

    const values = [
      timestamp,
      tabName,
      // Organisation
      body.orgName?.trim() || "",
      body.address?.trim() || "",
      body.postcode?.trim() || "",
      body.country?.trim() || "",
      body.orgPhone?.trim() || "",
      body.website?.trim() || "",
      body.revenue || "",
      body.employees || "",
      body.coreProducts?.trim() || "",
      body.websiteLink ? "Yes" : "No",
      body.publiclyListed ? "Yes" : "No",
      body.memberDirectory ? "Yes" : "No",
      body.mailingList ? "Yes" : "No",
      // Industry
      Array.isArray(body.selectedSectors)
        ? body.selectedSectors.join(", ")
        : "",
      body.otherSector?.trim() || "",
      // Locations
      Array.isArray(body.ukOffices) ? body.ukOffices.join(", ") : "",
      body.otherUkCity?.trim() || "",
      Array.isArray(body.pakOffices) ? body.pakOffices.join(", ") : "",
      body.otherPakCity?.trim() || "",
      body.ukEmployees || "",
      body.pakEmployees || "",
      // Profile
      body.orgProfile?.trim() || "",
      // CEO
      body.ceoFirstName?.trim() || "",
      body.ceoLastName?.trim() || "",
      body.ceoJobTitle?.trim() || "",
      body.ceoNationality?.trim() || "",
      body.ceoEmail?.trim() || "",
      body.ceoPhone?.trim() || "",
      body.ceoMobile?.trim() || "",
      body.ceoLinkedin?.trim() || "",
      // Primary Contact
      body.primaryFirstName?.trim() || "",
      body.primaryLastName?.trim() || "",
      body.primaryJobTitle?.trim() || "",
      body.primaryNationality?.trim() || "",
      body.primaryEmail?.trim() || "",
      body.primaryPhone?.trim() || "",
      // Secondary Contact
      body.secondaryFirstName?.trim() || "",
      body.secondaryLastName?.trim() || "",
      body.secondaryJobTitle?.trim() || "",
      body.secondaryEmail?.trim() || "",
      body.secondaryPhone?.trim() || "",
      body.secondaryMobile?.trim() || "",
      // Pakistan Contact
      body.pakFirstName?.trim() || "",
      body.pakLastName?.trim() || "",
      body.pakJobTitle?.trim() || "",
      body.pakEmail?.trim() || "",
      body.pakPhone?.trim() || "",
      body.pakAddress?.trim() || "",
      // Referrer
      body.referrerName?.trim() || "",
      body.referrerOrg?.trim() || "",
      body.referrerEmail?.trim() || "",
      body.referrerPhone?.trim() || "",
    ];

    await appendRow(SHEET_ID, tabName, HEADERS, values);

    try {
      const rows: Array<[string, unknown]> = HEADERS.map((h, i) => [h, values[i]]);

      await sendAlert({
        subject: `New membership application: ${tabName} — ${body.orgName?.trim() || "(unknown org)"}`,
        text: renderRowsText(rows),
        html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">New membership application submitted via the UPTECH website.</p>${renderRowsHtml(
          rows
        )}`,
        replyTo: body.personEmail?.trim() || body.ceoEmail?.trim() || undefined,
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
