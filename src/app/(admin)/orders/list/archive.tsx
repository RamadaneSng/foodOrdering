import { useAmdinOrderList } from "@/api/orders";
import OrderListItem from "@/components/OrderListItem";
import {
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";

export default function OrdersScreen() {
  const {
    data: orders,
    error,
    isLoading,
  } = useAmdinOrderList({ archived: true });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failled to load data</Text>;
  }
  return (
    <>
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
