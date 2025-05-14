import { Alert, Button, Image, Platform, SafeAreaView, StyleSheet, StatusBar, View } from "react-native";
import styles from "./styles";
import { useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  const handlePress = () => console.log("text press");

  const orientation = useDeviceOrientation();

  console.log(orientation);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="Click Me!"
        onPress={() => {
          Alert.alert("Title", "m=Messages", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ]);
        }}
      /> */}

      {/* <View
        style={{
          ...styles.box,
          width: "100%",
          height: orientation === "portrait" ? "30%" : "100%",
        }}
      ></View> */}

      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#000",
            flex: 2,
          }}
        />
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
          }}
        />{" "}
        <View
          style={{
            backgroundColor: "blue",
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
