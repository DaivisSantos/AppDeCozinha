import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, FlatList } from "react-native";
import { router } from "expo-router";
import { Recipe } from "@/components/Recipe";

import { styles } from "./styles";

export function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} color="black" onPress={() => router.back()}/>
        <Text>ingredientes</Text>

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
    </View>
  );
}
export default Recipes;