import { NextResponse } from "next/server";
import { getAllPakistanTopCompanies } from "@/lib/companyService";

export const runtime = "nodejs";

/** Backs the homepage showcase carousel, which lives in a client component tree
 * (app/page.tsx is "use client") and so can't read Supabase directly. */
export async function GET() {
  try {
    const companies = await getAllPakistanTopCompanies();
    return NextResponse.json({ companies });
  } catch (err) {
    console.error("Pakistan top companies fetch failed:", err);
    return NextResponse.json({ companies: [] }, { status: 200 });
  }
}
