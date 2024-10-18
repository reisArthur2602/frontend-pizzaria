import { IGetOrderCompleted } from "../services/order/get-order-completed";

export const calculateTotalItemsOrder = (order: IGetOrderCompleted) => {
  const { Item } = order;

  return Item.reduce((total, data) => {
    return total + data.quantity * data.product.price;
  }, 0);
};

// const calculateTotalPrice = (items: Item[]): number => {
//   return items.reduce((total, item) => {
//     return total + item.quantity * item.product.price;
//   }, 0);
// };
