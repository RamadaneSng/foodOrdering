import Button from "@/components/Button";
import { useCart } from "@/providers/CartProviders";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import {
  Stack,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] =
    useState<PizzaSize>("M");

  const router = useRouter();

  const product = products.find(
    (p) => p.id.toString() === id
  );

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);

    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.conatiner}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetailsScreen;
