// Company directory service layer.
//
// Today this reads from the static mock file. When a real source (Clutch
// sync, internal DB, or third-party API) is available, swap the bodies of
// `getTopAICompanies`, `getTopITCompanies`, and `getAllITCompanies` to call
// the new source. The public function signatures and return shapes are
// intentionally stable so pages and components don't change.
//
// Replacement sketch:
//   export async function getTopAICompanies() {
//     const res = await fetch(`${process.env.DIRECTORY_API}/ai/top`, {
//       headers: { authorization: `Bearer ${process.env.DIRECTORY_API_KEY}` },
//       next: { revalidate: 3600 },
//     });
//     return (await res.json()) as DirectoryCompany[];
//   }

import {
  companies,
  IT_CATEGORIES,
  type CompanyCategory,
  type DirectoryCompany,
} from "@/data/companies";

export type SortKey = "rating" | "reviews" | "name";

export interface CompanyFilters {
  search?: string;
  country?: string;
  service?: string;
  minRating?: number;
}

const TOP_LIMIT = 12;

function byRatingThenReviews(a: DirectoryCompany, b: DirectoryCompany) {
  if (b.rating !== a.rating) return b.rating - a.rating;
  return b.reviewCount - a.reviewCount;
}

export async function getTopAICompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => c.category === "AI")
    .sort(byRatingThenReviews)
    .slice(0, limit);
}

export async function getTopITCompanies(limit = TOP_LIMIT): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => IT_CATEGORIES.includes(c.category))
    .sort(byRatingThenReviews)
    .slice(0, limit);
}

export async function getAllITCompanies(): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => IT_CATEGORIES.includes(c.category))
    .sort(byRatingThenReviews);
}

export async function getAllAICompanies(): Promise<DirectoryCompany[]> {
  return [...companies]
    .filter((c) => c.category === "AI")
    .sort(byRatingThenReviews);
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
    if (typeof filters.minRating === "number" && c.rating < filters.minRating) return false;
    return true;
  });
}

export function sortCompanies(list: DirectoryCompany[], key: SortKey): DirectoryCompany[] {
  const copy = [...list];
  switch (key) {
    case "rating":
      return copy.sort(byRatingThenReviews);
    case "reviews":
      return copy.sort((a, b) => b.reviewCount - a.reviewCount);
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
