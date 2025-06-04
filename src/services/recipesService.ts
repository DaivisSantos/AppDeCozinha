import { RecipeResponse } from "./services.types"
import { supabase } from "./supabase"

async function findByIngredientsIds(ids: string[]): Promise<RecipeResponse[] > {
  const { data }: {data: RecipeResponse[] | null, error: any} = await supabase
    .rpc("recipes_by_ingredients", { ids })

  return data ?? []
}

async function show(id: string): Promise<RecipeResponse | null> {
  const { data } : {data: RecipeResponse | null, error: any} = await supabase
    .from("recipes")
    .select()
    .eq("id", id)
    .single()

  return data
}

export { findByIngredientsIds, show }
