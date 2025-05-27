import { StyleSheet } from "react-native";
import { theme } from "@/theme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: theme.fonts.size.heading.xl,
    lineHeight: 44,
    marginTop: 42,
    fontFamily: theme.fonts.family.bold,

  },
  subtitle: {
    fontFamily: theme.fonts.family.regular,
    marginBottom: 16,
  },
  message: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    lineHeight: 24,
    marginBottom: 16,
    marginTop: 8,
    color: theme.colors.gray_400,
  }
});

export default styles;
