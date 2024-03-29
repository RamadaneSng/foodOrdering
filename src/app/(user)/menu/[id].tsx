import { useProduct } from "@/api/products";
import Button from "@/components/Button";
import { defaultPizzaImage } from "@/constants/Images";
import { useCart } from "@/providers/CartProviders";
import { PizzaSize } from "@/types";
import {
  Stack,
  useLocalSearchParams,
  useRouter,
} from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id: idString } = useLocalSearchParams();

  const id = parseFloat(
    typeof idString === "string" ? idString : idString[0]
  );

  const {
    data: product,
    error,
    isLoading,
  } = useProduct(id);

  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] =
    useState<PizzaSize>("M");

  const router = useRouter();

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);

    router.push("/cart");
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failled to load data</Text>;
  }

  return (
    <View style={styles.conatiner}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.size,
              {
                backgroundColor:
                  selectedSize === size
                    ? "gainsboro"
                    : "transparent",
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.sizeText,
                {
                  color:
                    selectedSize === size
                      ? "black"
                      : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
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
    marginTop: "auto",
  },

  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    // backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductDetailsScreen;
