import React from "react";
import { View } from "react-native";

import styles from "./styles";
import ProductCard from "@/app/components/cards/product/productCard";

function ProductsScreen() {
  return (
    <View style={styles.container}>
      <ProductCard title="shirt" subTitle="$200" image={require("@/assets/images/1.jpg")} />
      <ProductCard title="shirt" subTitle="$200" image={require("@/assets/images/2.jpg")} />
      <ProductCard title="shirt" subTitle="$200" image={require("@/assets/images/3.png")} />
      <ProductCard title="shirt" subTitle="$200" image={require("@/assets/images/4.jpg")} />
      <ProductCard title="shirt" subTitle="$200" image={require("@/assets/images/5.jpg")} />
    </View>
  );
}

export default ProductsScreen;
