import { IGetOrders } from "../services/order/get-order-completed";

export const calculateTotalItemsOrder = (order: IGetOrders) => {
  const { Item } = order;

  return Item.reduce((total, data) => {
    return total + data.quantity * data.product.price;
  }, 0);
};
