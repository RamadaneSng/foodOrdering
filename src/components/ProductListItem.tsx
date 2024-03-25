import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Product } from "../types";
import { defaultPizzaImage } from "@/constants/Images";



type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({
  product,
}: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
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
