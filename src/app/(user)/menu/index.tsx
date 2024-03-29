import { useProductList } from "@/api/products";
import ProductListItem from "@/components/ProductListItem";
import { supabase } from "@/lib/supabase";
import products from "@assets/data/products";
import { useQuery } from "@tanstack/react-query";
import {
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList()

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failled to load data</Text>;
  }
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem product={item} />
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
