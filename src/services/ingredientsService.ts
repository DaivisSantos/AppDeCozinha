import { IngredientResponse, RecipeResponse } from "./services.types";
import { supabase } from "./supabase"

async function findByIds(ids: string[]): Promise<IngredientResponse[]> {
  const { data }: {data: IngredientResponse[] | null} = await supabase
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    

  return data ?? []
}

async function findByRecipeId(id: string): Promise<IngredientResponse[]> {
  const { data }: {data: { ingredients: IngredientResponse }[] | null} = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)


  return data ? data.map((item) => item.ingredients) : []
}

async function findAll(): Promise<IngredientResponse[]> {
  const { data, error}: {data: IngredientResponse[] | null, error: any } = await supabase
    .from('ingredients')
    .select('*')
    .order('name', { ascending: true })

    if (error) {
      throw error;
    }

    return data || [];
}

export { findAll, findByIds, findByRecipeId }
