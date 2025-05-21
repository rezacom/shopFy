import React from "react";
import { Text, TextProps } from "react-native";
import AppTextProps from "./types";
import styles from "./styles";

function AppText({ ...rest }: TextProps & AppTextProps) {
  return <Text {...rest} style={styles.iosText} />;
}

export default AppText;
