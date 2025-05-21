import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";
import styles from "./styles";
import PrimaryButton from "@/app/components/button/primaryButton";
import AppText from "@/app/components/appText";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

function WelcomeScreens() {
  return (
    <ImageBackground source={require("@/assets/login-bg.jpg")} style={styles.container}>
      <View style={styles.topView}>
        <Image source={require("@/assets/icon.png")} style={styles.logo} />
        <AppText style={styles.title}>Welcome To ShopFy</AppText>
        {/* <MaterialCommunityIcons name="email" size={50} /> */}
      </View>

      <View style={styles.bottomView}>
        <PrimaryButton title="Login" onPress={() => console.log("Taped")} />
        <Button title="Sign Up" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreens;
