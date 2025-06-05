import { ScrollView, View } from "react-native";
import { Ingredient, IngredientProps } from "../Ingredient";
import { styles } from "./styles";
import { Selected } from "../Selected";

type props = {
  ingredients: IngredientProps[]
  selecionados: string[]
  onChange: (value: string) => void
  horizontal?: boolean
}


export function Ingredients({ ingredients, selecionados, onChange, horizontal=false }: props) {

  return (
    <View>
      <ScrollView
        
        horizontal={horizontal}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {
          ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              image={ingredient.image}
              name={ingredient.name}
              produto={ingredient.produto}
              selected={selecionados.includes(String(ingredient.id))}
              onPress={() => onChange(String(ingredient.id))}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}
export default Ingredients;     