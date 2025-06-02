import { Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { services } from "@/services";

export type IngredientProps = {
  image: string;
  produto: string;
  selected?: boolean;
}

export function Ingredient({ image, produto, selected = true, ...rest }: IngredientProps & TouchableOpacityProps) {
  
  const imageUrl = services.storage.imagePath
  
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, selected && styles.selected]} 
      {...rest}
    >
      <Image source={{uri: `${imageUrl}/${image}`}} style={styles.image} />
      <Text style={styles.title}>{produto}</Text>
    </TouchableOpacity>
  );
}

export default Ingredient;
