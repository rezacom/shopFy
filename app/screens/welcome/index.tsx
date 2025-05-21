import React from "react";
import { Image, ImageBackground, View } from "react-native";
import styles from "./styles";
import { PrimaryButton, SecoundaryButton } from "@/app/components/button";
import AppText from "@/app/components/appText";

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
        <SecoundaryButton title="Sign Up" />
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreens;
