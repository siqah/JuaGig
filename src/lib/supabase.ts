import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fallback for development UI without backend connection
const isMock = !supabaseUrl || !supabaseAnonKey;

if (isMock) {
  console.warn("Supabase credentials missing. Running in MOCK mode.");
}

export const supabase = isMock
  ? ({} as any) // Cast to any to allow usage in code without crash, though it will fail at runtime if calls are made
  : createClient(supabaseUrl, supabaseAnonKey);

export const isMockMode = isMock;
