import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "@/app/config/colors";
import styles from "./styles";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashBtn}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
      </TouchableOpacity>
      <Image source={require("@/assets/images/1.jpg")} />
    </View>
  );
}

export default ViewImageScreen;
