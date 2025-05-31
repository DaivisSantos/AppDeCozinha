import { supabase } from "./supabase";

export async function IngredientsService() {
  const { data, error} = await supabase
    .from('ingredients')
    .select('*')
    .order('name', { ascending: true });

    if (error) throw error;
    return data;
}