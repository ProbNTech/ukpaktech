import { NextRequest, NextResponse } from "next/server";
import {
  listVendorsByStatus,
  setVendorStatus,
  approveAndInvite,
  approvePortfolio,
  deleteVendor,
  type VendorStatus,
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

/** GET /api/portfolio/admin?status=pending → list vendors (full records). */
export async function GET(req: NextRequest) {
  if (!authorized(req))
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  const statusParam = req.nextUrl.searchParams.get("status") || undefined;
  const status =
    statusParam && STATUSES.includes(statusParam as VendorStatus)
      ? (statusParam as VendorStatus)
      : undefined;

  try {
    const vendors = await listVendorsByStatus(status);
    const safe = vendors.map(({ complete_token, token_expires_at, ...v }) => {
      void complete_token;
      void token_expires_at;
      return v;
    });
    return NextResponse.json({ vendors: safe });
  } catch (error) {
    console.error("Admin list error:", error);
    return NextResponse.json({ error: "Failed to load vendors." }, { status: 500 });
  }
}

/** POST /api/portfolio/admin { id, action: 'approve' | 'reject' | 'unlist' } */
export async function POST(req: NextRequest) {
  if (!authorized(req))
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  try {
    const body = await req.json();
    const id = String(body.id ?? "");
    const action = String(body.action ?? "");
    if (!id) return NextResponse.json({ error: "Missing id." }, { status: 400 });

    // ── Approve a pending membership → issue magic link to complete profile ──
    if (action === "approve") {
      const { vendor, token } = await approveAndInvite(id);
      const completeUrl = `${baseUrl(req)}/portfolio/complete?token=${token}`;

      // Email the member their invite link.
      if (vendor.contact_email) {
        try {
          await sendAlert({
            to: vendor.contact_email,
            subject: "Your UPTECH membership is approved — complete your profile",
            text: `Hi ${vendor.contact_name || "there"},

Great news — ${vendor.company_name}'s UPTECH membership has been approved.

Complete your full company profile to get listed on the UPTECH portfolio (link valid for 30 days):
${completeUrl}

— UPTECH`,
            html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">Hi ${vendor.contact_name || "there"},</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;">Great news — <strong>${vendor.company_name}</strong>'s UPTECH membership has been approved. Complete your full company profile to get listed on the UPTECH portfolio:</p>
<p><a href="${completeUrl}" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 22px;border-radius:8px;font-family:system-ui,sans-serif;font-size:14px;text-decoration:none;">Complete your profile</a></p>
<p style="font-family:system-ui,sans-serif;font-size:12px;color:#6b7280;">Or paste this link into your browser (valid 30 days):<br>${completeUrl}</p>`,
          });
        } catch (mailErr) {
          console.error("Invite email failed:", mailErr);
        }
      }

      try {
        await mirrorVendorToSheet(vendor, "Approved & Invited");
      } catch (sheetErr) {
        console.error("Approve Sheets mirror failed:", sheetErr);
      }

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
            subject: "Your UPTECH portfolio is now live",
            text: `Hi ${vendor.contact_name || "there"},

${vendor.company_name}'s full profile has been approved and is now live on the UPTECH portfolio:
${profileUrl}

— UPTECH`,
            html: `<p style="font-family:system-ui,sans-serif;font-size:14px;">Hi ${vendor.contact_name || "there"},</p>
<p style="font-family:system-ui,sans-serif;font-size:14px;"><strong>${vendor.company_name}</strong>'s full profile has been approved and is now live on the UPTECH portfolio:</p>
<p><a href="${profileUrl}" style="display:inline-block;background:#2563EB;color:#fff;padding:12px 22px;border-radius:8px;font-family:system-ui,sans-serif;font-size:14px;text-decoration:none;">View your profile</a></p>`,
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

    // ── Reject (membership or portfolio) → hard-delete the row + logo ──
    if (action === "reject") {
      await deleteVendor(id);
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
    return NextResponse.json({ error: "Action failed." }, { status: 500 });
  }
}
