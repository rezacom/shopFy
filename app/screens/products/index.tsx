import React from "react";
import { ScrollView, View } from "react-native";

import styles from "./styles";
import ProductCard from "@/app/components/cards/product/productCard";

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProductCard title="Camera" subTitle="$200" image={require("@/assets/images/1.jpg")} />
        <ProductCard title="Iphone 7 pro" subTitle="$200" image={require("@/assets/images/2.jpg")} />
        <ProductCard title="Sony Experia z1" subTitle="$200" image={require("@/assets/images/3.png")} />
        <ProductCard title="Tablet pro" subTitle="$200" image={require("@/assets/images/4.jpg")} />
        <ProductCard title="Sony Experia " subTitle="$200" image={require("@/assets/images/5.jpg")} />
      </ScrollView>
    </View>
  );
}

export default ProductsScreen;
