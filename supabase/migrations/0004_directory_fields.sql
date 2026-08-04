-- ============================================================================
-- Directory display fields: unify data/companies.ts (mock) and data/members.ts
-- (curated real members) into `vendors` so every directory page reads from a
-- single Supabase-backed source. `source` distinguishes migrated rows from
-- ordinary applicant-pipeline vendors; page-level segmentation (mock-data
-- directories vs. the real member directory) is done by filtering on it.
-- ============================================================================

alter table public.vendors
  add column if not exists category text,
  add column if not exists rating numeric(2,1),
  add column if not exists review_count integer,
  add column if not exists clutch_profile_url text,
  add column if not exists source text not null default 'Member'
    check (source in ('Member','Mock','Clutch')),
  add column if not exists verified boolean not null default true,
  add column if not exists featured boolean not null default false,
  add column if not exists logo_scale numeric;

create index if not exists vendors_source_idx on public.vendors (source);
create index if not exists vendors_category_idx on public.vendors (category);
