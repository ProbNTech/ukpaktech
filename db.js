// Standalone connectivity probe for Hostinger's "Connect Database" wizard —
// NOT imported anywhere in the app. The real Supabase client the app actually
// uses is lib/supabase.ts (service-role key, required for admin writes and to
// bypass RLS on public reads). This file exists only so Hostinger's platform
// can detect/inject its own SUPABASE_URL + SUPABASE_API_KEY and, if it
// executes this file during deploy, log whether this box can reach Supabase
// at all — that's the actual open question, not whether the SDK is installed.
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

// Test the connection
supabase
  .from('vendors')
  .select('*')
  .limit(1)
  .then(({ data, error }) => {
    if (error) console.error('Connection error:', error);
    else console.log('Connected:', data);
  });

module.exports = supabase;
