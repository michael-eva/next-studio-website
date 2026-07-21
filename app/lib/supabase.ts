import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import path from "path";

// Load environment variables if not already loaded
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  config({ path: path.resolve(process.cwd(), ".env") });
}

// const supabaseUrl = "https://iwvfccpjiejuhcdxxxzk.supabase.co";
// const supabaseServiceKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dmZjY3BqaWVqdWhjZHh4eHprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTQ5OTc0MCwiZXhwIjoyMDU1MDc1NzQwfQ.PecKyzXbfxZJTq9p4EnnrFJQK3HoMutw-FETW1VFRhs";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dmZjY3BqaWVqdWhjZHh4eHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0OTk3NDAsImV4cCI6MjA1NTA3NTc0MH0.sAEos4TqaqmaD4dJyiQc-E2WGeOaSWpsnQIiU7fMXyM";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only throw errors if we're in a server context and the variables are missing
if (typeof window === "undefined") {
  if (!supabaseUrl) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL environment variable");
  }

  if (!supabaseServiceKey) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
  }

  if (!supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable"
    );
  }
}

// Client for server-side operations (with service role key)
export const supabaseAdmin = createClient(
  supabaseUrl || "",
  supabaseServiceKey || ""
);

// Client for client-side operations (with anon key)
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "");
