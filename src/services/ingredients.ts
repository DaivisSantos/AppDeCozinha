import { IngredientsResponse } from "./services.types";
import { supabase } from "./supabase";

export async function IngredientsService(): Promise<IngredientsResponse[]> {
  const { data, error}: {data: IngredientsResponse[] | null, error: any } = await supabase
    .from('ingredients')
    .select('*')
    .order('name', { ascending: true })
   

    if (error) {
      throw error;
    }

    return data || [];
}