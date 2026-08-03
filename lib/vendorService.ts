import { randomBytes } from "crypto";
import { getSupabaseAdmin, VENDOR_LOGO_BUCKET } from "@/lib/supabase";
import type { CompanyCategory, DirectoryCompany } from "@/data/companies";

/* ─────────────────────────────────────────────────────────────
   Shared option lists (sourced from the Tech Vendor Capability Form)
   ───────────────────────────────────────────────────────────── */

export const COMPANY_TYPES = [
  "Software House",
  "Agency",
  "Consultancy",
  "Outsourcing",
  "Other",
] as const;

export const SERVICE_OPTIONS = [
  "Software Development - Web",
  "Software Development - Mobile",
  "Software Development - SaaS",
  "UI/UX Design",
  "Cloud Services - AWS",
  "Cloud Services - Azure",
  "Cloud Services - GCP",
  "DevOps",
  "AI & Machine Learning",
  "Cybersecurity",
  "QA & Testing",
  "ERP/CRM Development",
  "API Integrations",
] as const;

export const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"] as const;
export const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "Teams", "Slack"] as const;
export const PM_METHODOLOGIES = ["Agile", "Scrum", "Kanban", "Hybrid"] as const;

/** Industry Focus checklist — mirrors the client's capability form Section 4. */
export const INDUSTRY_OPTIONS = [
  "Artificial Intelligence & Machine Learning",
  "Software Development & SaaS",
  "Cybersecurity",
  "Cloud Computing & Infrastructure",
  "FinTech & Digital Banking",
  "HealthTech & BioTech",
  "EdTech & E-Learning",
  "E-Commerce & Retail Tech",
  "Clean Technology & GreenTech",
  "Telecommunications",
  "Data Analytics & Big Data",
  "IoT & Smart Systems",
  "Blockchain & Web3",
  "Consulting & Professional Services",
  "Manufacturing & Industrial Tech",
  "Logistics & Supply Chain Tech",
  "Legal & Regulatory Tech",
  "Real Estate & PropTech",
  "Media & Creative Technology",
  "Government & Public Sector",
  "Academic & Research",
  "Non-Profit & Social Enterprise",
] as const;

/** Payment Terms — mirrors the client's capability form Section 10. */
export const PAYMENT_TERMS_OPTIONS = ["Immediately", "30 days", "45 days"] as const;

export type VendorStatus =
  | "pending" // membership submitted, awaiting membership review
  | "invited" // membership approved (listed as a member), magic link sent
  | "portfolio_pending" // full profile submitted, awaiting portfolio review
  | "listed"; // portfolio approved, live on the portfolio page

/** Statuses that count as an approved member (shown on the members directory). */
export const MEMBER_STATUSES: VendorStatus[] = ["listed"];

/* ─────────────────────────────────────────────────────────────
   Vendor record shape (mirrors the `vendors` table)
   ───────────────────────────────────────────────────────────── */

export interface Vendor {
  id: string;
  status: VendorStatus;
  slug: string;

  // Membership application (basic)
  company_name: string;
  website: string | null;
  company_size: string | null;
  registration_no: string | null;
  country: string | null;
  city: string | null;
  business_address: string | null;
  postal_code: string | null;
  org_phone: string | null;
  whatsapp: string | null;

  contact_name: string | null;
  contact_job_title: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  contact_nationality: string | null;

  // Operational contact (manager) — collected on the capability profile
  operational_contact_name: string | null;
  operational_contact_job_title: string | null;
  operational_contact_email: string | null;
  operational_contact_phone: string | null;
  operational_contact_method: string | null;

  terms_accepted: boolean | null;
  membership_terms_accepted: boolean | null;
  arbitration_accepted: boolean | null;

  // Full capability profile
  company_type: string | null;
  year_established: string | null;
  preferred_contact_method: string | null;

  services: string[] | null;
  other_services: string | null;
  industries: string[] | null;
  other_industries: string | null;
  primary_stack: string | null;
  secondary_stack: string | null;
  specialised_skills: string | null;
  key_projects: string | null;
  industries_served: string | null;
  portfolio_links: string | null;
  short_description: string | null;

  total_tech_staff: string | null;
  team_structure: string | null;
  monthly_capacity: string | null;
  hourly_rate: string | null;
  fixed_price: boolean | null;
  retainer: boolean | null;
  min_project_size: string | null;
  payment_terms: string | null;
  security_certs: string | null;
  data_compliance: string | null;
  insurance: string | null;
  pm_methodology: string | null;
  tools_used: string | null;
  timezone_hours: string | null;
  own_saas: string | null;
  client_notes: string | null;

  logo_url: string | null;

  complete_token: string | null;
  token_expires_at: string | null;
  created_at: string;
  updated_at: string;
  invited_at: string | null;
  approved_at: string | null;
  deleted_at: string | null;
}

/** Public-facing fields exposed on the portfolio (no PII / tokens). */
export type PublicVendor = Pick<
  Vendor,
  | "id"
  | "slug"
  | "company_name"
  | "website"
  | "company_type"
  | "company_size"
  | "year_established"
  | "country"
  | "city"
  | "business_address"
  | "short_description"
  | "services"
  | "other_services"
  | "industries"
  | "other_industries"
  | "primary_stack"
  | "secondary_stack"
  | "specialised_skills"
  | "key_projects"
  | "industries_served"
  | "portfolio_links"
  | "team_structure"
  | "pm_methodology"
  | "tools_used"
  | "own_saas"
  | "logo_url"
>;

const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days to finish the profile

/* ─────────────────────────────────────────────────────────────
   Helpers
   ───────────────────────────────────────────────────────────── */

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function newToken(): string {
  return randomBytes(24).toString("hex");
}

/** Ensure a unique slug by appending a short suffix on collision. */
async function uniqueSlug(base: string): Promise<string> {
  const supabase = getSupabaseAdmin();
  let slug = base || "vendor";
  for (let attempt = 0; attempt < 5; attempt++) {
    const { data } = await supabase
      .from("vendors")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();
    if (!data) return slug;
    slug = `${base}-${randomBytes(2).toString("hex")}`;
  }
  return `${base}-${randomBytes(4).toString("hex")}`;
}

/* ─────────────────────────────────────────────────────────────
   Stage 1 — membership application (status: pending)
   ───────────────────────────────────────────────────────────── */

export interface MembershipInput {
  company_name: string;
  website?: string;
  company_size?: string;
  registration_no?: string;
  country?: string;
  city?: string;
  business_address?: string;
  postal_code?: string;
  org_phone?: string;
  whatsapp?: string;
  // Card fields collected up front on the short membership form
  company_type?: string;
  short_description?: string;
  services?: string[];
  logo_url?: string;
  contact_name?: string;
  contact_job_title?: string;
  contact_email?: string;
  contact_phone?: string;
  contact_nationality?: string;
  terms_accepted?: boolean;
  membership_terms_accepted?: boolean;
  arbitration_accepted?: boolean;
}

export async function createMembershipApplication(
  input: MembershipInput
): Promise<{ id: string; slug: string }> {
  const supabase = getSupabaseAdmin();
  const slug = await uniqueSlug(slugify(input.company_name));

  const { data, error } = await supabase
    .from("vendors")
    .insert({ status: "pending" as VendorStatus, slug, ...input })
    .select("id, slug")
    .single();

  if (error) throw new Error(`Failed to create application: ${error.message}`);
  return { id: data.id as string, slug: data.slug as string };
}

/* ─────────────────────────────────────────────────────────────
   Approval — issue a magic link to complete the full profile
   ───────────────────────────────────────────────────────────── */

export async function approveAndInvite(
  id: string
): Promise<{ vendor: Vendor; token: string }> {
  const supabase = getSupabaseAdmin();
  const token = newToken();

  const { data, error } = await supabase
    .from("vendors")
    .update({
      status: "invited" as VendorStatus,
      complete_token: token,
      token_expires_at: new Date(Date.now() + TOKEN_TTL_MS).toISOString(),
      invited_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw new Error(`Failed to approve: ${error.message}`);
  return { vendor: data as Vendor, token };
}

/* ─────────────────────────────────────────────────────────────
   Stage 2 — completion (token-gated)
   ───────────────────────────────────────────────────────────── */

export async function getVendorByToken(token: string): Promise<Vendor | null> {
  if (!token) return null;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .eq("complete_token", token)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return null;

  const vendor = data as Vendor;
  if (vendor.deleted_at) return null; // trashed — link no longer valid
  // Approved members may use the link to fill in / edit their profile — whether
  // they haven't started (invited), are awaiting review (portfolio_pending), or
  // are already live and editing (listed).
  if (
    vendor.status !== "invited" &&
    vendor.status !== "portfolio_pending" &&
    vendor.status !== "listed"
  )
    return null;
  if (vendor.token_expires_at && new Date(vendor.token_expires_at) < new Date()) {
    return null; // expired link
  }
  return vendor;
}

/** Columns a vendor may set on the capability form (allow-list). */
export type ProfileInput = Partial<
  Pick<
    Vendor,
    | "website"
    | "company_type"
    | "company_size"
    | "year_established"
    | "country"
    | "city"
    | "business_address"
    | "short_description"
    | "contact_name"
    | "contact_job_title"
    | "contact_email"
    | "contact_phone"
    | "preferred_contact_method"
    | "operational_contact_name"
    | "operational_contact_job_title"
    | "operational_contact_email"
    | "operational_contact_phone"
    | "operational_contact_method"
    | "services"
    | "other_services"
    | "industries"
    | "other_industries"
    | "primary_stack"
    | "secondary_stack"
    | "specialised_skills"
    | "key_projects"
    | "industries_served"
    | "portfolio_links"
    | "total_tech_staff"
    | "team_structure"
    | "monthly_capacity"
    | "hourly_rate"
    | "fixed_price"
    | "retainer"
    | "min_project_size"
    | "payment_terms"
    | "security_certs"
    | "data_compliance"
    | "insurance"
    | "pm_methodology"
    | "tools_used"
    | "timezone_hours"
    | "own_saas"
    | "client_notes"
    | "logo_url"
  >
>;

const PROFILE_FIELDS: (keyof ProfileInput)[] = [
  "website",
  "company_type",
  "company_size",
  "year_established",
  "country",
  "city",
  "business_address",
  "short_description",
  "contact_name",
  "contact_job_title",
  "contact_email",
  "contact_phone",
  "preferred_contact_method",
  "operational_contact_name",
  "operational_contact_job_title",
  "operational_contact_email",
  "operational_contact_phone",
  "operational_contact_method",
  "services",
  "other_services",
  "industries",
  "other_industries",
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
  "fixed_price",
  "retainer",
  "min_project_size",
  "payment_terms",
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

/**
 * Save the capability profile. With a single approval gate, submitting a
 * completed profile lists the vendor publicly straight away.
 */
export async function saveProfile(
  token: string,
  input: ProfileInput,
  opts: { submit: boolean }
): Promise<Vendor> {
  const supabase = getSupabaseAdmin();
  const existing = await getVendorByToken(token);
  if (!existing) throw new Error("Invalid or expired link.");

  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  for (const field of PROFILE_FIELDS) {
    if (field in input && input[field] !== undefined) patch[field] = input[field];
  }
  if (opts.submit) {
    // Second gate: a completed profile awaits admin review before going live on
    // the portfolio. Final approval (approvePortfolio) flips it to "listed".
    patch.status = "portfolio_pending";
  }

  const { data, error } = await supabase
    .from("vendors")
    .update(patch)
    .eq("id", existing.id)
    .select("*")
    .single();

  if (error) throw new Error(`Failed to save profile: ${error.message}`);
  return data as Vendor;
}

/* ─────────────────────────────────────────────────────────────
   Admin — review & moderation
   ───────────────────────────────────────────────────────────── */

export async function listVendorsByStatus(status?: VendorStatus): Promise<Vendor[]> {
  const supabase = getSupabaseAdmin();
  let query = supabase
    .from("vendors")
    .select("*")
    .is("deleted_at", null)
    .order("updated_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as Vendor[];
}

/** Rows currently in the trash (soft-deleted), most recently trashed first. */
export async function listTrashedVendors(): Promise<Vendor[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .not("deleted_at", "is", null)
    .order("deleted_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as Vendor[];
}

export async function getVendorById(id: string): Promise<Vendor | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as Vendor) ?? null;
}

export async function setVendorStatus(id: string, status: VendorStatus): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("vendors")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

/** Final gate — approve a submitted portfolio so it goes live on the portfolio. */
export async function approvePortfolio(id: string): Promise<Vendor> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .update({
      status: "listed" as VendorStatus,
      approved_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(`Failed to approve portfolio: ${error.message}`);
  return data as Vendor;
}

/** Derive a storage object path from a public logo URL (strips bucket prefix + cache-bust query). */
function storagePathFromPublicUrl(url: string | null): string | null {
  if (!url) return null;
  const marker = `/${VENDOR_LOGO_BUCKET}/`;
  const idx = url.indexOf(marker);
  if (idx === -1) return null;
  return url.slice(idx + marker.length).split("?")[0] || null;
}

/**
 * Soft-delete a vendor (used on rejection) — moves it to the Trash tab rather
 * than destroying it. Excluded from every normal query until restored or
 * permanently deleted.
 */
export async function trashVendor(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("vendors")
    .update({ deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(`Failed to move vendor to trash: ${error.message}`);
}

/** Restore a trashed vendor back to normal visibility, unchanged otherwise. */
export async function restoreVendor(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("vendors")
    .update({ deleted_at: null, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(`Failed to restore vendor: ${error.message}`);
}

/**
 * Permanently delete a vendor (used from the Trash tab only) — removes the
 * row and its uploaded logo so nothing is left orphaned in storage.
 */
export async function permanentlyDeleteVendor(id: string): Promise<void> {
  const supabase = getSupabaseAdmin();

  const { data } = await supabase
    .from("vendors")
    .select("logo_url")
    .eq("id", id)
    .maybeSingle();

  const path = storagePathFromPublicUrl((data?.logo_url as string | undefined) ?? null);
  if (path) {
    const { error: rmErr } = await supabase.storage.from(VENDOR_LOGO_BUCKET).remove([path]);
    if (rmErr) console.error("Logo delete failed:", rmErr.message);
  }

  const { error } = await supabase.from("vendors").delete().eq("id", id);
  if (error) throw new Error(`Failed to delete vendor: ${error.message}`);
}

/** Fields an admin may set directly via the dashboard (full CRUD — excludes system-managed columns). */
const ADMIN_EDITABLE_FIELDS: (keyof Vendor)[] = [
  "status",
  "slug",
  "company_name",
  "website",
  "company_size",
  "registration_no",
  "country",
  "city",
  "business_address",
  "postal_code",
  "org_phone",
  "whatsapp",
  "short_description",
  "contact_name",
  "contact_job_title",
  "contact_email",
  "contact_phone",
  "contact_nationality",
  "operational_contact_name",
  "operational_contact_job_title",
  "operational_contact_email",
  "operational_contact_phone",
  "operational_contact_method",
  "terms_accepted",
  "membership_terms_accepted",
  "arbitration_accepted",
  "company_type",
  "year_established",
  "preferred_contact_method",
  "services",
  "other_services",
  "industries",
  "other_industries",
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
  "fixed_price",
  "retainer",
  "min_project_size",
  "payment_terms",
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

export type AdminVendorInput = Partial<Pick<Vendor, (typeof ADMIN_EDITABLE_FIELDS)[number]>>;

/** Admin dashboard edit — full CRUD, not gated by a magic-link token. */
export async function updateVendorByAdmin(id: string, input: AdminVendorInput): Promise<Vendor> {
  const supabase = getSupabaseAdmin();
  const patch: Record<string, unknown> = { updated_at: new Date().toISOString() };
  for (const field of ADMIN_EDITABLE_FIELDS) {
    if (field in input && input[field] !== undefined) patch[field] = input[field];
  }
  const { data, error } = await supabase
    .from("vendors")
    .update(patch)
    .eq("id", id)
    .select("*")
    .single();
  if (error) throw new Error(`Failed to update vendor: ${error.message}`);
  return data as Vendor;
}

/** Admin dashboard create — adds an entry directly, bypassing the applicant flow. */
export async function createVendorByAdmin(input: AdminVendorInput): Promise<Vendor> {
  const supabase = getSupabaseAdmin();
  const companyName = String(input.company_name ?? "").trim();
  if (!companyName) throw new Error("Company name is required.");

  const slug = input.slug?.trim() || (await uniqueSlug(slugify(companyName)));
  const patch: Record<string, unknown> = { status: input.status ?? "listed", slug };
  for (const field of ADMIN_EDITABLE_FIELDS) {
    if (field === "slug" || field === "status") continue;
    if (field in input && input[field] !== undefined) patch[field] = input[field];
  }
  patch.company_name = companyName;

  const { data, error } = await supabase
    .from("vendors")
    .insert(patch)
    .select("*")
    .single();
  if (error) throw new Error(`Failed to create vendor: ${error.message}`);
  return data as Vendor;
}

/* ─────────────────────────────────────────────────────────────
   Public portfolio reads
   ───────────────────────────────────────────────────────────── */

const PUBLIC_COLUMNS =
  "id, slug, company_name, website, company_type, company_size, year_established, country, city, business_address, short_description, services, other_services, primary_stack, secondary_stack, specialised_skills, key_projects, industries_served, portfolio_links, team_structure, pm_methodology, tools_used, own_saas, logo_url";

export async function listPublicVendors(): Promise<PublicVendor[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select(PUBLIC_COLUMNS)
    .eq("status", "listed")
    .is("deleted_at", null)
    .order("company_name", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as PublicVendor[];
}

export async function getPublicVendorBySlug(slug: string): Promise<PublicVendor | null> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select(PUBLIC_COLUMNS)
    .eq("slug", slug)
    .eq("status", "listed")
    .is("deleted_at", null)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as PublicVendor) ?? null;
}

/* ─────────────────────────────────────────────────────────────
   Members directory feed (approved members → /pakistan-top-companies)
   ───────────────────────────────────────────────────────────── */

/** Best-effort category bucket from the (free-text) company type + services. */
function vendorCategory(v: PublicVendor): CompanyCategory {
  const hay = `${v.company_type ?? ""} ${(v.services ?? []).join(" ")}`.toLowerCase();
  if (/cyber|security/.test(hay)) return "Cybersecurity";
  if (/cloud|devops/.test(hay)) return "Cloud";
  if (/\bai\b|machine learning|automation/.test(hay)) return "AI & Automation";
  if (/saas|product/.test(hay)) return "SaaS Products";
  if (/software|web|mobile|app|develop/.test(hay)) return "Software Development";
  return "Consulting";
}

export function vendorToDirectoryCompany(v: PublicVendor): DirectoryCompany {
  const location = [v.city, v.country].filter(Boolean).join(", ");
  return {
    id: `vendor-${v.slug}`,
    slug: v.slug,
    name: v.company_name,
    category: vendorCategory(v),
    services: v.services ?? [],
    location: location || (v.country ?? ""),
    country: v.country ?? "",
    description: v.short_description || v.industries_served || "",
    logoUrl: v.logo_url ?? undefined,
    websiteUrl: v.website ?? undefined,
    source: "Member",
    verified: true,
  };
}

/** Approved members (membership-approved and beyond) as directory companies. */
export async function listMemberDirectory(): Promise<DirectoryCompany[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("vendors")
    .select(PUBLIC_COLUMNS)
    .in("status", MEMBER_STATUSES)
    .is("deleted_at", null)
    .order("company_name", { ascending: true });
  if (error) throw new Error(error.message);
  return ((data ?? []) as PublicVendor[]).map(vendorToDirectoryCompany);
}
