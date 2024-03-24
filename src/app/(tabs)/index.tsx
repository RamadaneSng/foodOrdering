import ProductListItem from "@/components/ProductListItem";
import products from "@assets/data/products";
import { View } from "react-native";

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
    </View>
  );
}
