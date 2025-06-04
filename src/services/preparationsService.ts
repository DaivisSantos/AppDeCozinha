import { PreparationsResponse } from "./services.types"
import { supabase } from "./supabase"

async function findByRecipeId(id: string): Promise<PreparationsResponse[]> {
  const { data }: {data: PreparationsResponse[] | null} = await supabase
    .from("preparations")
    .select()
    .eq("recipe_id", id)

  return data ?? []
}

export { findByRecipeId }
