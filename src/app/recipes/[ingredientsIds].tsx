import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";

import { styles } from "./styles";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { IngredientResponse, RecipeResponse } from "@/services/services.types";
import Ingredients from "@/components/Ingredients";

export function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);

  const params = useLocalSearchParams<{ingredientsIds: string}>();
  const ingredientesIds= params.ingredientsIds.split(",")
  
  useEffect(() => {
    services.ingredients.findByIds(ingredientesIds).then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientesIds).then(setRecipes)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} color="black" onPress={() => router.back()}/>
        <Text style={styles.title}>ingredientes</Text>
      <View style={{paddingVertical: 12}}>
      <Ingredients 
      ingredients={ingredients}
      selecionados={[]}
      onChange={() => {}}
      horizontal={true}
    />
      </View>
      </View>

      <FlatList 
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Recipe recipe={item} onPressOut={() => router.push(`/recipe/${item.id}`)}/>)}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{gap: 16}}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        numColumns={2}

      />

    </View>
  );
}
export default Recipes;