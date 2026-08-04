// Directory company types.
//
// Company data now lives entirely in Supabase's `vendors` table (see
// lib/vendorService.ts / lib/companyService.ts) — migrated from the mock
// placeholder companies and curated member roster that used to live here.
// These types stay as the shared shape every directory page/component reads.

export type CompanyCategory =
  // Categories used by the mock-data directories (/top-ai-companies, /top-it-companies)
  | "AI"
  | "IT"
  | "Software"
  | "Cloud"
  | "Cybersecurity"
  | "Data"
  // Categories used by real UPTECH members on /pakistan-top-companies, chosen
  // to reflect what each company actually does (AI/automation, custom software,
  // SaaS, project consulting), not the generic CompanyService bucket.
  | "AI & Automation"
  | "Software Development"
  | "SaaS Products"
  | "Consulting";

export interface DirectoryCompany {
  /** Stable identifier from the source system. */
  id: string;
  /** URL-friendly identifier. */
  slug: string;
  name: string;
  /** Primary category bucket, drives which directory the company appears in. */
  category: CompanyCategory;
  /** Free-form service tags shown on the card. */
  services: string[];
  /** Average rating, 0–5, one decimal. Omitted for verified members without external review data. */
  rating?: number;
  /** Total review count from the source. Omitted for verified members without external review data. */
  reviewCount?: number;
  /** "City, Country"full readable string. */
  location: string;
  country: string;
  description: string;
  /** Optional hosted logo. When absent the card renders initials. */
  logoUrl?: string;
  /** Optional company website, only set when a real, verified URL is known. */
  websiteUrl?: string;
  /**
   * Optional public Clutch profile URL (or equivalent source profile).
   * When absent, the card shows a "Profile coming soon" placeholder instead
   * of linking out. Only populate this with real, verified profile URLs.
   */
  clutchProfileUrl?: string;
  /** Provenance label, shown on the card. */
  source: "Clutch" | "Mock" | "Member";
  /** Marked true when source has verified the listing. */
  verified: boolean;
}

/** Categories considered "IT-adjacent" for the IT directory views. */
export const IT_CATEGORIES: CompanyCategory[] = [
  "IT",
  "Software",
  "Cloud",
  "Cybersecurity",
  "Data",
];
