import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import { listItemCardProps } from "./types";
import AppText from "../../appText";

function ListItem({ image, title, subTitle }: listItemCardProps) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detail}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default ListItem;
