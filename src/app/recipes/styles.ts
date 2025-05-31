import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    paddingHorizontal: 21,
    paddingTop: 62,
    marginBottom: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    fontFamily: theme.fonts.family.bold,
  }
})