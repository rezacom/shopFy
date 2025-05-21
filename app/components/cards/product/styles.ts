import colors from "@/app/config/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    borderRadius: "15px",
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secoundary,
    paddingTop: 10,
  },
  detail: {
    padding: 20,
  },
});

export default styles;
