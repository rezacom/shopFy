import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import { listItemCardProps } from "./types";
import AppText from "../../appText";
import colors from "@/app/config/colors";

function ListItemCard({ image, title, subTitle, onPress }: listItemCardProps) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.detail}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ListItemCard;
