import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
    </View>
  );
}
