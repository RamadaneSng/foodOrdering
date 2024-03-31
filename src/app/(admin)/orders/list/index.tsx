import { useAmdinOrderList } from "@/api/orders";
import { useInsertOrderSubscribtion } from "@/api/orders/suscribtion";
import {
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";
import OrderListItem from "../../../../components/OrderListItem";

export default function OrdersScreen() {
  const {
    data: orders,
    error,
    isLoading,
  } = useAmdinOrderList({ archived: false });

  useInsertOrderSubscribtion();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failled to load data</Text>;
  }
  return (
    <FlatList
      data={orders}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      renderItem={({ item }) => (
        <OrderListItem order={item} />
      )}
    />
  );
}
