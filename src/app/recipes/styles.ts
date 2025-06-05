import { theme } from "@/theme";
import { StyleSheet } from "react-native";
import { receiveMessageOnPort } from "worker_threads";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header: {
    paddingHorizontal: 21,
    paddingTop: 62,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    fontFamily: theme.fonts.family.bold,
  },
  recipes:{
  padding: 26,
  },
  recipesContent: {
    gap: 16,
  }
})