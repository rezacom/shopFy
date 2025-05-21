import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { PrimaryType } from "./types";
import styles from "./styles";
import AppText from "../appText";

function SecoundaryButton({ title, onPress }: PrimaryType) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.secoundaryButton}>
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default SecoundaryButton;
