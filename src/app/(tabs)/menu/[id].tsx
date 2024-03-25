import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Text>ProductDetailsScreen</Text>
    </View>
  );
};

export default ProductDetailsScreen;
