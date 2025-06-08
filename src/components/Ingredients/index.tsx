import { ScrollView } from "react-native";
import { Ingredient, IngredientProps } from "../Ingredient";
import { styles } from "./styles";

type props = {
  ingredients: IngredientProps[]
  selecionados: string[]
  onChange: (value: string) => void
  horizontal?: boolean
  
}


export function Ingredients({ ingredients, selecionados, onChange, horizontal=false }: props) {

  return (
      <ScrollView
        
        horizontal={horizontal}
        contentContainerStyle={[styles.container, !horizontal && { flexWrap: "wrap" }]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {
          ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              image={ingredient.image}
              name={ingredient.name}
              selected={selecionados.includes(String(ingredient.id))}
              onPress={() => onChange(String(ingredient.id))}
            />
          ))
        }
      </ScrollView>
  );
}
export default Ingredients;