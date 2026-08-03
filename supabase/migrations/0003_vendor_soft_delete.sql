-- ============================================================================
-- Soft-delete support: "Reject & delete" now moves a row to Trash instead of
-- hard-deleting it immediately. Trash rows are excluded from every normal
-- query (admin status tabs, public listings, member directory, token lookup)
-- until restored or permanently deleted from the Trash tab.
-- ============================================================================

alter table public.vendors
  add column if not exists deleted_at timestamptz;

create index if not exists vendors_deleted_at_idx on public.vendors (deleted_at);
