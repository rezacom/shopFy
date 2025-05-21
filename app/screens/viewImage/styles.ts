import colors from "@/app/config/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    left: 20,
    top: 20,
  },
  trashBtn: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  image: {
    width: "100%",
    height: 400,
  },
});

export default styles;
