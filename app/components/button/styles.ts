import { StyleSheet } from "react-native";

import colors from "@/app/config/colors";

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 46,
  },
  secoundaryButton: {
    backgroundColor: colors.secoundary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 46,
  },
  text: {
    fontSize: 18,
    color: colors.white,
  },
});

export default styles;
