import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

// Ye 'supabase' variable hum poori website me kahi bhi database access karne ke liye use karenge
export const supabase = createClient(supabaseUrl, supabaseKey);
