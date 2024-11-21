"use server";

import { api } from "@/lib/axios-config";
import { OrderResponse, OrderStatus } from "@/types/Order";

export const GetOrder = async (status?: OrderStatus) => {
  const response = await api.get<OrderResponse[] | []>(
    status ? `/order?status=${status}` : `/order`,
  );
  return response.data;
};
