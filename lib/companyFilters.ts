// Pure, client-safe helpers for filtering/sorting DirectoryCompany lists.
// Kept separate from lib/companyService.ts, which imports lib/vendorService.ts
// (server-only, uses next/cache) — bundling that into client components like
// DirectoryView.tsx would break the client build.

import type { CompanyCategory, DirectoryCompany } from "@/data/companies";

export type SortKey = "rating" | "reviews" | "name";

export interface CompanyFilters {
  search?: string;
  country?: string;
  service?: string;
  category?: CompanyCategory | "";
  minRating?: number;
}

export function byRatingThenReviews(a: DirectoryCompany, b: DirectoryCompany) {
  const ar = a.rating ?? -1;
  const br = b.rating ?? -1;
  if (br !== ar) return br - ar;
  const arc = a.reviewCount ?? 0;
  const brc = b.reviewCount ?? 0;
  return brc - arc;
}

export function filterCompanies(
  list: DirectoryCompany[],
  filters: CompanyFilters,
): DirectoryCompany[] {
  const query = filters.search?.trim().toLowerCase() ?? "";
  return list.filter((c) => {
    if (query) {
      const haystack = `${c.name} ${c.description} ${c.services.join(" ")} ${c.location}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    if (filters.country && c.country !== filters.country) return false;
    if (filters.service && !c.services.includes(filters.service)) return false;
    if (filters.category && c.category !== filters.category) return false;
    if (typeof filters.minRating === "number" && filters.minRating > 0) {
      if (typeof c.rating !== "number" || c.rating < filters.minRating) return false;
    }
    return true;
  });
}

export function sortCompanies(list: DirectoryCompany[], key: SortKey): DirectoryCompany[] {
  const copy = [...list];
  switch (key) {
    case "rating":
      return copy.sort(byRatingThenReviews);
    case "reviews":
      return copy.sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
  }
}

/** Distinct facet helpers for filter UI dropdowns. */
export function getCountryOptions(list: DirectoryCompany[]): string[] {
  return Array.from(new Set(list.map((c) => c.country))).sort();
}

export function getServiceOptions(list: DirectoryCompany[]): string[] {
  return Array.from(new Set(list.flatMap((c) => c.services))).sort();
}

export function getCategoryOptions(list: DirectoryCompany[]): CompanyCategory[] {
  return Array.from(new Set(list.map((c) => c.category))).sort() as CompanyCategory[];
}
