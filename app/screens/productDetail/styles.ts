import { StyleSheet } from "react-native";
import colors from "@/app/config/colors";

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
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
  userList: {
    marginTop: 40,
  },
});

export default styles;
