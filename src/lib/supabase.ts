import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a safe Supabase client that won't crash if env vars are missing
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; // Type assertion to avoid breaking imports, but will return errors on use

export type Service = {
  id: string;
  slug: string;
  name_en: string;
  name_zh: string;
  name_id: string;
  description_en: string;
  description_zh: string;
  description_id: string;
  icon: string;
  features_en: string[];
  features_zh: string[];
  features_id: string[];
  order: number;
  created_at: string;
};

export type CaseStudy = {
  id: string;
  title_en: string;
  title_zh: string;
  title_id: string;
  description_en: string;
  description_zh: string;
  description_id: string;
  industry: string;
  challenge_en: string;
  challenge_zh: string;
  challenge_id: string;
  solution_en: string;
  solution_zh: string;
  solution_id: string;
  result_en: string;
  result_zh: string;
  result_id: string;
  image_url: string;
  created_at: string;
};
