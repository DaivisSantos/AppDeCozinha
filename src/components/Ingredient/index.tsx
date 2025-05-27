import { Text, Image, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

export type IngredientProps = {
  image: any
  produto: string;
  selected?: boolean;
}

export function Ingredient({ image, produto, selected = true, ...rest }: IngredientProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, selected && styles.selected]} 
      {...rest}
    >
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{produto}</Text>
    </TouchableOpacity>
  );
}

export default Ingredient;
