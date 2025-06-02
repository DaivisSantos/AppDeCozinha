import { Alert, ScrollView, View } from "react-native";
import Ingredient from "../Ingredient";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";
import { Services } from "@/services";
import { IngredientsResponse } from "@/services/services.types";


export function Ingredients() {

  const [ingredients, setIngredients] = useState<IngredientsResponse[]>([])
  const [selecionados, setSelecionados] = useState<string[]>([])

  function mudancaDeSelecao(value: string){
    if (selecionados.includes(value)){
      return setSelecionados((state) => state.filter(i => i !== value))
    }
    setSelecionados(state => [...state, value])
  }

  useEffect(() => {
    console.log(selecionados)
  }, [selecionados])

  const handleClear = () => {
    Alert.alert("Limpar seleção", "Deseja limpar a seleção?", [{
      text: "Cancelar",
      style: "cancel",
    },
    {
      text: "Limpar",
      onPress: () => setSelecionados([]),
    }])
  }

  const handlerSearch = () => {
   Alert.alert("Buscar receitas", "Deseja buscar receitas com os ingredientes selecionados?", [{
    text: "Cancelar",
    style: "cancel",
  },
{
  text: "Buscar",
  onPress: () => router.navigate(`../recipes/${selecionados.join(",")}`),
}])
  }

useEffect(() => {
   Services.ingredients.IngredientsService().then((data) => setIngredients(data));
}, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {
          ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient.id}
              image={ingredient.image}
              produto={ingredient.name}
              selected={selecionados.includes(String(ingredient.id))}
              onPress={() => mudancaDeSelecao(String(ingredient.id))}
            />
          ))
        }
      </ScrollView>

    {selecionados.length > 0 && (
      <Selected
        quantity={selecionados.length}
        onClear={() => handleClear()}
        onSearch={() =>handlerSearch()}
      />
    )}
    </View>
  );
}
export default Ingredients;     