-- ============================================================================
-- Adds fields required to match the client's "Tech Vendor Registration &
-- Capability Form" spreadsheet exactly: a second (operational/manager)
-- contact, an industry-focus checklist, and payment terms.
-- ============================================================================

alter table public.vendors
  add column if not exists operational_contact_name        text,
  add column if not exists operational_contact_job_title    text,
  add column if not exists operational_contact_email        text,
  add column if not exists operational_contact_phone        text,
  add column if not exists operational_contact_method       text,

  add column if not exists industries                       text[],
  add column if not exists other_industries                  text,

  add column if not exists payment_terms                    text;
