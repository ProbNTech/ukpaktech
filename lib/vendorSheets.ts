import { appendRow } from "@/lib/google-sheets";
import type { Vendor } from "@/lib/vendorService";

/**
 * Mirror portfolio activity into the existing submissions spreadsheet so the
 * team keeps one familiar place to glance at leads. Best-effort — callers
 * should wrap in try/catch and never block the main flow on a Sheets failure.
 */

const SHEET_ID = process.env.SUBMISSIONS_SHEET_ID;
const TAB_NAME = "Portfolio Vendors";

const HEADERS = [
  "Timestamp",
  "Event",
  "Status",
  "Company Name",
  "Website",
  "Company Type",
  "Contact Name",
  "Contact Email",
  "Contact Phone",
  "Slug",
  "Services",
  "Primary Stack",
  "Industries Served",
];

export async function mirrorVendorToSheet(
  vendor: Pick<
    Vendor,
    | "status"
    | "slug"
    | "company_name"
    | "website"
    | "company_type"
    | "contact_name"
    | "contact_email"
    | "contact_phone"
    | "services"
    | "primary_stack"
    | "industries_served"
  >,
  event: "Approved & Invited" | "Portfolio submitted" | "Listed"
): Promise<void> {
  if (!SHEET_ID) return; // Sheets mirror disabled if no sheet configured

  const values = [
    new Date().toISOString(),
    event,
    vendor.status,
    vendor.company_name || "",
    vendor.website || "",
    vendor.company_type || "",
    vendor.contact_name || "",
    vendor.contact_email || "",
    vendor.contact_phone || "",
    vendor.slug || "",
    Array.isArray(vendor.services) ? vendor.services.join(", ") : "",
    vendor.primary_stack || "",
    vendor.industries_served || "",
  ];

  await appendRow(SHEET_ID, TAB_NAME, HEADERS, values);
}
