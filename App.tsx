import { SafeAreaView } from "react-native";
import styles from "./styles";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreens from "./app/screens/welcome";
import ProductsScreen from "./app/screens/products";
import ProductDetailScreen from "./app/screens/productDetail";
import ViewImageScreen from "./app/screens/viewImage";
import MessagesScreen from "./app/screens/messages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreens /> */}
      {/* <ProductsScreen /> */}
      {/* <ProductDetailScreen /> */}
      {/* <ViewImageScreen /> */}
      <MessagesScreen />
    </SafeAreaView>
  );
}
