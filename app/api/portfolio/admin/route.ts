import { NextRequest, NextResponse } from "next/server";
import {
  listVendorsByStatus,
  listTrashedVendors,
  getVendorStatusCounts,
  setVendorStatus,
  approveAndInvite,
  approvePortfolio,
  trashVendor,
  restoreVendor,
  permanentlyDeleteVendor,
  updateVendorByAdmin,
  createVendorByAdmin,
  type VendorStatus,
  type AdminVendorInput,
} from "@/lib/vendorService";
import { mirrorVendorToSheet } from "@/lib/vendorSheets";
import { sendAlert } from "@/lib/mailer";

export const runtime = "nodejs";

function authorized(req: NextRequest): boolean {
  const expected = process.env.PORTFOLIO_ADMIN_KEY;
  if (!expected) return false;
  return req.headers.get("x-admin-key") === expected;
}

function baseUrl(req: NextRequest): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    req.nextUrl.origin
  ).replace(/\/$/, "");
}

const STATUSES: VendorStatus[] = ["pending", "invited", "portfolio_pending", "listed"];

/** GET /api/portfolio/admin?status=pending|invited|portfolio_pending|listed|trash&page=1&pageSize=30 → paginated vendors + status counts. */
export async function GET(req: NextRequest) {
  if (!authorized(req))
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const statusParam = req.nextUrl.searchParams.get("status") || undefined;
  const page = Math.max(1, Number(req.nextUrl.searchParams.get("page")) || 1);
  const pageSize = Math.min(100, Math.max(1, Number(req.nextUrl.searchParams.get("pageSize")) || 30));

  try {
    const [{ vendors, total }, counts] = await Promise.all([
      statusParam === "trash"
        ? listTrashedVendors(page, pageSize)
        : listVendorsByStatus(
            statusParam && STATUSES.includes(statusParam as VendorStatus)
              ? (statusParam as VendorStatus)
              : undefined,
            page,
            pageSize
          ),
      getVendorStatusCounts(),
    ]);
    const safe = vendors.map(({ complete_token, token_expires_at, ...v }) => {
      void complete_token;
      void token_expires_at;
      return v;
    });
    return NextResponse.json({ vendors: safe, total, page, pageSize, counts });
  } catch (error) {
    console.error("Admin list error:", error);
    return NextResponse.json({ error: "Failed to load vendors." }, { status: 500 });
  }
}

/** POST /api/portfolio/admin { id, action } — approve/reject/unlist/restore/permanent-delete/update/create */
export async function POST(req: NextRequest) {
  if (!authorized(req))
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  try {
    const body = await req.json();
    const action = String(body.action ?? "");

    // ── Create a new vendor entry directly from the dashboard ──
    if (action === "create") {
      const vendor = await createVendorByAdmin((body.vendor ?? {}) as AdminVendorInput);
      return NextResponse.json({ success: true, vendor });
    }

    const id = String(body.id ?? "");
    if (!id) return NextResponse.json({ error: "Missing id." }, { status: 400 });

    // ── Edit any field on an existing entry ──
    if (action === "update") {
      const vendor = await updateVendorByAdmin(id, (body.vendor ?? {}) as AdminVendorInput);
      return NextResponse.json({ success: true, vendor });
    }

    // ── Approve a pending membership → issue magic link to complete profile ──
    if (action === "approve") {
      const { vendor, token } = await approveAndInvite(id);
      const completeUrl = `${baseUrl(req)}/portfolio/complete?token=${token}`;

      // Email the member their invite link.
      if (vendor.contact_email) {
        try {
          await sendAlert({
            to: vendor.contact_email,
            subject: "Your UPTECH membership has been approved",
            text: `Dear ${vendor.contact_name || "colleague"},

We are pleased to confirm that ${vendor.company_name}'s membership application to the UK-Pakistan Tech Forum (UPTECH) has been approved.

The next step is to complete your full company profile. This will allow us to list ${vendor.company_name} on the UPTECH portfolio, our directory of verified member companies.

Please complete your profile using the link below. This link is valid for 30 days.
${completeUrl}

If you have any questions in the meantime, please do not hesitate to get in touch.

Kind regards,
The UPTECH Team`,
            html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">Dear ${vendor.contact_name || "colleague"},</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">We are pleased to confirm that <strong>${vendor.company_name}</strong>'s membership application to the UK-Pakistan Tech Forum (UPTECH) has been approved.</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">The next step is to complete your full company profile. This will allow us to list ${vendor.company_name} on the UPTECH portfolio, our directory of verified member companies.</p>
<p><a href="${completeUrl}" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 22px;border-radius:8px;font-family:system-ui,sans-serif;font-size:14px;text-decoration:none;">Complete your profile</a></p>
<p style="font-family:system-ui,sans-serif;font-size:12px;color:#6b7280;">This link is valid for 30 days. If the button above does not work, please copy and paste this URL into your browser:<br>${completeUrl}</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">If you have any questions in the meantime, please do not hesitate to get in touch.</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">Kind regards,<br>The UPTECH Team</p>`,
          });
        } catch (mailErr) {
          console.error("Invite email failed:", mailErr);
        }
      }

      // No Sheets mirror here — the vendor isn't listed on the site yet.
      // The sheet row is written only in the "approve-portfolio" branch below,
      // at the exact moment the vendor goes live on /portfolio.

      return NextResponse.json({ success: true, status: vendor.status });
    }

    // ── Approve a submitted portfolio → list it live on the portfolio page ──
    if (action === "approve-portfolio") {
      const vendor = await approvePortfolio(id);
      const profileUrl = `${baseUrl(req)}/portfolio/${vendor.slug}`;

      if (vendor.contact_email) {
        try {
          await sendAlert({
            to: vendor.contact_email,
            subject: "Your UPTECH portfolio profile is now live",
            text: `Dear ${vendor.contact_name || "colleague"},

We are delighted to let you know that ${vendor.company_name}'s full profile has been approved and is now live on the UPTECH portfolio.

You can view your listing here:
${profileUrl}

If you would like to make any changes to your profile, please get in touch with the UPTECH team.

Kind regards,
The UPTECH Team`,
            html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">Dear ${vendor.contact_name || "colleague"},</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">We are delighted to let you know that <strong>${vendor.company_name}</strong>'s full profile has been approved and is now live on the UPTECH portfolio.</p>
<p><a href="${profileUrl}" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 22px;border-radius:8px;font-family:system-ui,sans-serif;font-size:14px;text-decoration:none;">View your profile</a></p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">If you would like to make any changes to your profile, please get in touch with the UPTECH team.</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">Kind regards,<br>The UPTECH Team</p>`,
          });
        } catch (mailErr) {
          console.error("Portfolio approved email failed:", mailErr);
        }
      }

      try {
        await mirrorVendorToSheet(vendor, "Listed");
      } catch (sheetErr) {
        console.error("Portfolio approve Sheets mirror failed:", sheetErr);
      }

      return NextResponse.json({ success: true, status: vendor.status });
    }

    // ── Reject (membership or portfolio) → move to Trash (soft-delete) ──
    if (action === "reject") {
      await trashVendor(id);
      return NextResponse.json({ success: true, trashed: true });
    }

    // ── Restore a trashed entry back to normal visibility ──
    if (action === "restore") {
      await restoreVendor(id);
      return NextResponse.json({ success: true, restored: true });
    }

    // ── Permanently delete — Trash tab only, cannot be undone ──
    if (action === "permanent-delete") {
      await permanentlyDeleteVendor(id);
      return NextResponse.json({ success: true, deleted: true });
    }

    // ── Unlist a live portfolio → back to member-only (still on the directory) ──
    if (action === "unlist") {
      await setVendorStatus(id, "invited");
      return NextResponse.json({ success: true, status: "invited" as VendorStatus });
    }

    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  } catch (error) {
    console.error("Admin action error:", error);
    const message = error instanceof Error ? error.message : "Action failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
