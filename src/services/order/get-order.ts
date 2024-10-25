"use server";

import { api } from "@/lib/axios-config";
import { OrderResponse } from "@/types/Order";

export const GetOrder = async () => {
  const response = await api.get<OrderResponse[] | []>("/order");
  return response.data;
};
