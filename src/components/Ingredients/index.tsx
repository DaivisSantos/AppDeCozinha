import { Alert, ScrollView, View } from "react-native";
import Ingredient from "../Ingredient";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Selected } from "../Selected";
import { router } from "expo-router";

export function Ingredients() {

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
  onPress: () => router.navigate("/recipes"),
}])
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {
          Array.from({ length: 100 }).map((_, index) => (
            <Ingredient
              key={index}
              image={require("@/assets/apple.png")}
              produto="Maçã"
            selected={selecionados.includes(String(index))}
            onPress={() => mudancaDeSelecao(String(index))}
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