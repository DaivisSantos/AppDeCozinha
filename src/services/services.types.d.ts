export type IngredientResponse = {
  id: string
  name: string
  image: string
}

export type PreparationsResponse = {
  id: string
  recipe_id: string
  description: string
  step: number
}

export type RecipeResponse = {
  id: string
  name: string
  image: string
  minutes: number
  ingredients: {
    id: string
  name: string
  image: string
  minutes: number
  }
}
