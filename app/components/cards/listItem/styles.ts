import colors from "@/app/config/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    flexDirection: "row",
    gap: 7,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 7,
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secoundary,
    paddingTop: 10,
  },
  detail: {},
});

export default styles;
