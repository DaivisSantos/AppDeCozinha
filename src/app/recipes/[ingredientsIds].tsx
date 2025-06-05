import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";

import { styles } from "./styles";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { IngredientResponse } from "@/services/services.types";
import Ingredients from "@/components/Ingredients";

export function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

  const params = useLocalSearchParams<{ingredientsIds: string}>();
  const ingredientesIds= params.ingredientsIds.split(",")
  
  useEffect(() => {
    services.ingredients.findByIds(ingredientesIds).then(setIngredients)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} color="black" onPress={() => router.back()}/>
        <Text style={styles.title}>ingredientes</Text>
      
      <Ingredients 
      ingredients={ingredients.map(ingredient => ({
        ...ingredient,
        produto: ingredient.name 
      }))}
      selecionados={[]}
      onChange={() => {}}
      horizontal={true}
    />
      </View>

      <FlatList 
        data={["1"]}
        keyExtractor={item => item}
        renderItem={() => (
          <Recipe
           recipe={{name: "Omelete",
            image: "https://www.kitano.com.br/wp-content/uploads/2019/07/SSP_1993-Omelete-de-pizza-mussarela-ore%E2%95%A0%C3%BCgano-e-tomate.jpg",
            minutes: 10,
           }}/>
        )}/>
      
    </View>
  );
}
export default Recipes;