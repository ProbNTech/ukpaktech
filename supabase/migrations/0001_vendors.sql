-- ============================================================================
-- Membership + Tech Vendor Portfolio — schema
-- Run this in the Supabase SQL editor (or `supabase db push`).
--
-- Pipeline:  pending           (applied for membership, basic info)
--         →  invited           (membership approved → listed on the members
--                               directory, magic link emailed)
--         →  portfolio_pending (full capability profile submitted, in review)
--         →  listed            (portfolio approved → live on the portfolio page)
-- Rejections hard-delete the row (and its logo), so 'rejected' is no longer
-- used; it stays in the allow-list only for backwards compatibility.
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.vendors (
  id                        uuid primary key default gen_random_uuid(),
  status                    text not null default 'pending'
                              check (status in ('pending','invited','portfolio_pending','listed','rejected')),
  slug                      text not null unique,

  -- ── Membership application (card info collected on /membership) ──
  company_name              text not null,
  website                   text,
  company_size              text,          -- employee range
  registration_no           text,
  country                   text,
  city                      text,
  business_address          text,
  postal_code               text,
  org_phone                 text,
  whatsapp                  text,
  short_description         text,          -- one-liner shown on the directory card

  -- Primary contact
  contact_name              text,
  contact_job_title         text,
  contact_email             text,
  contact_phone             text,
  contact_nationality       text,

  -- Membership consents
  terms_accepted            boolean default false,
  membership_terms_accepted boolean default false,
  arbitration_accepted      boolean default false,

  -- ── Full capability profile (collected after approval) ──
  company_type              text,
  year_established          text,
  preferred_contact_method  text,

  services                  text[],
  other_services            text,
  primary_stack             text,
  secondary_stack           text,
  specialised_skills        text,
  key_projects              text,
  industries_served         text,
  portfolio_links           text,

  total_tech_staff          text,
  team_structure            text,
  monthly_capacity          text,
  hourly_rate               text,
  fixed_price               boolean,
  retainer                  boolean,
  min_project_size          text,
  security_certs            text,
  data_compliance           text,
  insurance                 text,
  pm_methodology            text,
  tools_used                text,
  timezone_hours            text,
  own_saas                  text,
  client_notes              text,

  logo_url                  text,

  -- Magic-link return token (generated at approval time)
  complete_token            text unique,
  token_expires_at          timestamptz,

  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now(),
  invited_at                timestamptz,
  approved_at               timestamptz
);

create index if not exists vendors_status_idx on public.vendors (status);
create index if not exists vendors_token_idx  on public.vendors (complete_token);

-- ----------------------------------------------------------------------------
-- Row Level Security: deny everything to anon/authenticated.
-- All access is server-side via the service-role key (which bypasses RLS),
-- so no public policies are required. RLS-on with no policy = locked down.
-- ----------------------------------------------------------------------------
alter table public.vendors enable row level security;

-- ----------------------------------------------------------------------------
-- Storage bucket for vendor logos (public read).
-- ----------------------------------------------------------------------------
insert into storage.buckets (id, name, public)
values ('vendor-logos', 'vendor-logos', true)
on conflict (id) do nothing;
