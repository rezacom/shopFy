import { SafeAreaView } from "react-native";
import styles from "./styles";
import { useDeviceOrientation } from "@react-native-community/hooks";
import WelcomeScreens from "./app/screens/welcome";
import ProductsScreen from "./app/screens/products";

export default function App() {
  const handlePress = () => console.log("text press");

  const orientation = useDeviceOrientation();

  console.log(orientation);

  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreens /> */}
      <ProductsScreen />
    </SafeAreaView>
  );
}
