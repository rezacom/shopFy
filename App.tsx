import { Alert, Button, Image, Platform, SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
export default function App() {
  const handlePress = () => console.log("text press");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me!"
        onPress={() => {
          Alert.alert("Title", "m=Messages", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 20,
    padding: 5,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
