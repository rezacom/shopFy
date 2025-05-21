import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import { productCardProps } from "./types";
import AppText from "../../appText";

function ProductCard({ image, title, subTitle }: productCardProps) {
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

export default ProductCard;
