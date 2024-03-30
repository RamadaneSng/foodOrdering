import Colors from "@/constants/Colors";
import { defaultPizzaImage } from "@/constants/Images";
import { Link, useSegments } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
} from "react-native";
import { Tables } from "../types";

type ProductListItemProps = {
  product: Tables<"products">;
};

const ProductListItem = ({
  product,
}: ProductListItemProps) => {
  const segments = useSegments();

  return (
    <Link
      href={`/${segments[0]}/menu/${product.id}`}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{
            uri: product.image || defaultPizzaImage,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "50%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: { color: Colors.light.tint, fontWeight: "bold" },
});
