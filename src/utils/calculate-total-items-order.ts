import { OrderResponse } from "@/types/Order";

export const calculateTotalItemsOrder = (order: OrderResponse) => {
  const { Item } = order;

  return Item.reduce((total, data) => {
    return total + data.quantity * data.product.price;
  }, 0);
};
