import { useMyOrderList } from "@/api/orders";
import { Stack } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import OrderListItem from "../../../components/OrderListItem";

export default function OrdersScreen() {
  const {
    data: orders,
    error,
    isLoading,
  } = useMyOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failled to load data</Text>;
  }
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => (
          <OrderListItem order={item} />
        )}
      />
    </>
  );
}
