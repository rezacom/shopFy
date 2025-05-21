import React from "react";
import { Text, TextProps } from "react-native";
import AppTextProps from "./types";
import styles from "./styles";

function AppText({ ...rest }: TextProps & AppTextProps) {
  return <Text {...rest} style={[styles.text, rest.style]} />;
}

export default AppText;
