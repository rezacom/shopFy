import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import AppText from "@/app/components/appText";
import ListItem from "@/app/components/cards/listItem/listItemCard";

function ProductDetailScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/1.jpg")} style={styles.image} />
      <View style={styles.detail}>
        <AppText style={styles.title}>Camera</AppText>
        <AppText style={styles.subTitle}>$200</AppText>

        <View style={styles.userList}>
          <ListItem title="Reza Shoja" subTitle="Front End Developer" image={require("@/assets/images/user.jpg")} />
        </View>
      </View>
    </View>
  );
}

export default ProductDetailScreen;
