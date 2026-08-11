import { NextResponse } from "next/server";
import { getPakistanTopCompaniesShowcase } from "@/lib/companyService";

export const runtime = "nodejs";

const SHOWCASE_LIMIT = 10;

/** Backs the homepage showcase carousel, which lives in a client component tree
 * (app/page.tsx is "use client") and so can't read Supabase directly. Capped at
 * SHOWCASE_LIMIT since the carousel only ever displays a handful of companies. */
export async function GET() {
  try {
    const companies = await getPakistanTopCompaniesShowcase(SHOWCASE_LIMIT);
    return NextResponse.json({ companies });
  } catch (err) {
    console.error("Pakistan top companies fetch failed:", err);
    return NextResponse.json({ companies: [] }, { status: 200 });
  }
}
