import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 10,
  },
  topView: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    flex: 1,
    width: "80%",
    gap: 10,
  },
});

export default styles;
