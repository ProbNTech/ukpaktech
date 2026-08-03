import { NextRequest, NextResponse } from "next/server";
import {
  getVendorByToken,
  saveProfile,
  SERVICE_OPTIONS,
  type ProfileInput,
} from "@/lib/vendorService";
import { sendAlert } from "@/lib/mailer";

export const runtime = "nodejs";

/** GET /api/portfolio/complete?token=… → prefill data for the form. */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token") ?? "";
  try {
    const vendor = await getVendorByToken(token);
    if (!vendor) {
      return NextResponse.json(
        { error: "This link is invalid or has expired." },
        { status: 404 }
      );
    }
    const { complete_token, token_expires_at, ...safe } = vendor;
    void complete_token;
    void token_expires_at;
    return NextResponse.json({ vendor: safe });
  } catch (error) {
    console.error("Portfolio complete GET error:", error);
    return NextResponse.json({ error: "Failed to load profile." }, { status: 500 });
  }
}

function sanitizeServices(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value
    .filter((v): v is string => typeof v === "string")
    .filter((v) => (SERVICE_OPTIONS as readonly string[]).includes(v));
}

/** PATCH /api/portfolio/complete → save draft or submit for review. */
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const token = String(body.token ?? "");
    const submit = body.submit === true;

    if (!token)
      return NextResponse.json({ error: "Missing token." }, { status: 400 });

    const profile = (body.profile ?? {}) as Record<string, unknown>;

    // Build a clean ProfileInput; coerce known types.
    const input: ProfileInput = {};
    const stringFields: (keyof ProfileInput)[] = [
      "website",
      "company_type",
      "contact_name",
      "contact_email",
      "contact_phone",
      "business_address",
      "short_description",
      "company_size",
      "year_established",
      "preferred_contact_method",
      "contact_job_title",
      "other_services",
      "primary_stack",
      "secondary_stack",
      "specialised_skills",
      "key_projects",
      "industries_served",
      "portfolio_links",
      "total_tech_staff",
      "team_structure",
      "monthly_capacity",
      "hourly_rate",
      "min_project_size",
      "security_certs",
      "data_compliance",
      "insurance",
      "pm_methodology",
      "tools_used",
      "timezone_hours",
      "own_saas",
      "client_notes",
      "logo_url",
    ];
    for (const f of stringFields) {
      if (f in profile && profile[f] != null) {
        (input as Record<string, unknown>)[f] = String(profile[f]).trim();
      }
    }
    const services = sanitizeServices(profile.services);
    if (services) input.services = services;
    if ("fixed_price" in profile) input.fixed_price = profile.fixed_price === true;
    if ("retainer" in profile) input.retainer = profile.retainer === true;

    const vendor = await saveProfile(token, input, { submit });

    if (submit) {
      // Second gate: the completed profile is now awaiting portfolio review.
      // An admin approves it in the portfolio admin to list it publicly.
      try {
        await sendAlert({
          subject: `Portfolio submitted for review — ${vendor.company_name}`,
          text: `${vendor.company_name} submitted their full capability profile. Review & approve it in the portfolio admin (Portfolio review tab) to list them on /portfolio/${vendor.slug}.`,
          html: `<p style="font-family:system-ui,sans-serif;font-size:14px;"><strong>${vendor.company_name}</strong> submitted their full capability profile for review. Approve it in the portfolio admin (<em>Portfolio review</em> tab) to list them publicly at <a href="/portfolio/${vendor.slug}">/portfolio/${vendor.slug}</a>.</p>`,
          replyTo: vendor.contact_email ?? undefined,
        });
      } catch (mailErr) {
        console.error("Portfolio submitted alert failed:", mailErr);
      }
      // No Sheets mirror here — the vendor isn't listed on the site yet.
      // The sheet row is written only when the portfolio admin approves and
      // lists it, at the exact moment it goes live on /portfolio.
    }

    return NextResponse.json({ success: true, status: vendor.status });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save profile.";
    const expired = /invalid or expired/i.test(message);
    console.error("Portfolio complete PATCH error:", error);
    return NextResponse.json(
      { error: expired ? message : "Failed to save profile." },
      { status: expired ? 404 : 500 }
    );
  }
}
