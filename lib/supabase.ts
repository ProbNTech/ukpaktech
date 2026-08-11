import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client using the service-role key.
 *
 * NEVER import this into a client component — the service-role key bypasses
 * RLS and must stay on the server. All portfolio reads/writes go through API
 * routes and server components only.
 */
let cached: SupabaseClient | null = null;

// Node's default fetch has no request timeout — a stalled connection to
// Supabase can hang for minutes, holding the request open. On resource-capped
// hosting that pileup exhausts the app's connection/memory ceiling and takes
// down every other page (including fully static ones) with it. Fail fast
// instead so a Supabase outage degrades only the pages that need it.
const FETCH_TIMEOUT_MS = 8000;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase credentials. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  cached = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) =>
        fetch(input, { ...init, signal: init?.signal ?? AbortSignal.timeout(FETCH_TIMEOUT_MS) }),
    },
  });

  return cached;
}

export const VENDOR_LOGO_BUCKET = "vendor-logos";
