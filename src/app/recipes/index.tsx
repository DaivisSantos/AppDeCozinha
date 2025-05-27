import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { router } from "expo-router";

export function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="arrow-back" size={32} color="black" onPress={() => router.back()}/>
      </View>
    </View>
  );
}
export default Recipes;