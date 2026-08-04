import { NextRequest, NextResponse } from "next/server";
import {
  searchITCompanies,
  searchAICompanies,
  searchPakistanCompanies,
  type DirectorySearchOptions,
} from "@/lib/companyService";
import type { CompanyCategory } from "@/data/companies";
import type { SortKey } from "@/lib/companyFilters";

export const runtime = "nodejs";

const HANDLERS = {
  it: searchITCompanies,
  ai: searchAICompanies,
  pakistan: searchPakistanCompanies,
} as const;

const SORT_KEYS: SortKey[] = ["rating", "reviews", "name"];

/** Backs DirectoryView's server-side pagination — 30 companies per request,
 * with search/filters applied across the full dataset, not just the loaded page. */
export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams;
  const directory = sp.get("directory") as keyof typeof HANDLERS | null;
  const handler = directory ? HANDLERS[directory] : undefined;
  if (!handler) {
    return NextResponse.json({ error: "Unknown or missing 'directory' parameter." }, { status: 400 });
  }

  const sortParam = sp.get("sort");
  const opts: DirectorySearchOptions = {
    search: sp.get("search") || undefined,
    country: sp.get("country") || undefined,
    service: sp.get("service") || undefined,
    category: (sp.get("category") as CompanyCategory) || undefined,
    minRating: sp.get("minRating") ? Number(sp.get("minRating")) : undefined,
    sort: SORT_KEYS.includes(sortParam as SortKey) ? (sortParam as SortKey) : undefined,
    page: Math.max(1, Number(sp.get("page")) || 1),
    pageSize: Math.min(100, Math.max(1, Number(sp.get("pageSize")) || 30)),
  };

  try {
    const result = await handler(opts);
    return NextResponse.json(result);
  } catch (err) {
    console.error("Directory search failed:", err);
    return NextResponse.json({ error: "Search failed." }, { status: 500 });
  }
}
