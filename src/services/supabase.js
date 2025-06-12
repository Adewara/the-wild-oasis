import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iuqrlubawandqdjrkglq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cXJsdWJhd2FuZHFkanJrZ2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTY0MTQsImV4cCI6MjA2MzQ5MjQxNH0.Zeg6nKVgyQ-gaZEtUXjp72E-_O-Cv6eYAo2BLZBbWmk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
