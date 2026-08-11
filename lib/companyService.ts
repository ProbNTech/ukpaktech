// Company directory data-fetching layer — server-only (imports
// lib/vendorService.ts, which uses next/cache). All directory pages read
// through this module, backed entirely by the Supabase `vendors` table.
// Reads are cached in vendorService.ts via `unstable_cache` and invalidated
// on every admin create/list/unlist/delete action.
//
// Pure filter/sort helpers used by client components live in
// lib/companyFilters.ts instead, so client bundles never pull this file in.

import { IT_CATEGORIES, type CompanyCategory, type DirectoryCompany } from "@/data/companies";
import { byRatingThenReviews, type SortKey } from "@/lib/companyFilters";
import {
  listMemberDirectory,
  listMemberDirectoryLimited,
  listFeaturedMemberDirectory,
  listMockDirectoryCompanies,
  searchDirectoryCompanies,
  searchDirectoryCompaniesCached,
  type DirectorySearchResult,
} from "@/lib/vendorService";

export interface DirectorySearchOptions {
  search?: string;
  country?: string;
  service?: string;
  category?: CompanyCategory | "";
  minRating?: number;
  sort?: SortKey;
  page?: number;
  pageSize?: number;
}

const TOP_LIMIT = 12;

/** AI + every IT-adjacent category. Used by /pakistan-top-companies. */
export const PAKISTAN_TOP_CATEGORIES: CompanyCategory[] = ["AI", ...IT_CATEGORIES];

/** Real verified UPTECH members (Supabase `vendors`, source='Member'). */
export async function getAllPakistanTopCompanies(): Promise<DirectoryCompany[]> {
  return listMemberDirectory();
}

/** Real verified UPTECH members, capped at `limit`. Backs the homepage showcase carousel. */
export async function getPakistanTopCompaniesShowcase(limit = 10): Promise<DirectoryCompany[]> {
  return listMemberDirectoryLimited(limit);
}

/** Members editorially pinned via the `featured` column, up to `limit`. */
export async function getTopPakistanCompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return listFeaturedMemberDirectory(limit);
}

export async function getTopAICompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  const all = await listMockDirectoryCompanies(["AI"]);
  return all.sort(byRatingThenReviews).slice(0, limit);
}

export async function getTopITCompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  const all = await listMockDirectoryCompanies(IT_CATEGORIES);
  return all.sort(byRatingThenReviews).slice(0, limit);
}

export async function getAllITCompanies(): Promise<DirectoryCompany[]> {
  const all = await listMockDirectoryCompanies(IT_CATEGORIES);
  return all.sort(byRatingThenReviews);
}

export async function getAllAICompanies(): Promise<DirectoryCompany[]> {
  const all = await listMockDirectoryCompanies(["AI"]);
  return all.sort(byRatingThenReviews);
}

/** Paginated, server-searched grid data — backs /it-companies and /top-it-companies. */
export async function searchITCompanies(
  opts: DirectorySearchOptions = {}
): Promise<DirectorySearchResult> {
  return searchDirectoryCompanies({ source: "Mock", categories: IT_CATEGORIES, ...opts });
}

/** Paginated, server-searched grid data — backs /top-ai-companies. */
export async function searchAICompanies(
  opts: DirectorySearchOptions = {}
): Promise<DirectorySearchResult> {
  return searchDirectoryCompanies({ source: "Mock", categories: ["AI"], ...opts });
}

/** Paginated, server-searched grid data — backs /pakistan-top-companies. */
export async function searchPakistanCompanies(
  opts: DirectorySearchOptions = {}
): Promise<DirectorySearchResult> {
  return searchDirectoryCompanies({ source: "Member", ...opts });
}

/**
 * Cached first-page default view (no user search/filter applied) for each
 * directory's initial server render — every visitor hits one of these three
 * exact queries before touching a filter, so caching avoids a live Supabase
 * round trip on every page view. Only used by the page components' initial
 * fetch; /api/directory/search keeps calling the uncached functions above
 * for user-driven queries.
 */
export async function getDefaultITCompaniesPage(): Promise<DirectorySearchResult> {
  return searchDirectoryCompaniesCached({
    source: "Mock",
    categories: IT_CATEGORIES,
    page: 1,
    pageSize: 30,
    sort: "rating",
  });
}

export async function getDefaultAICompaniesPage(): Promise<DirectorySearchResult> {
  return searchDirectoryCompaniesCached({
    source: "Mock",
    categories: ["AI"],
    page: 1,
    pageSize: 30,
    sort: "rating",
  });
}

export async function getDefaultPakistanCompaniesPage(): Promise<DirectorySearchResult> {
  return searchDirectoryCompaniesCached({
    source: "Member",
    page: 1,
    pageSize: 30,
    sort: "name",
  });
}
