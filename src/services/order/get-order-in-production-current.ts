"use server";

import { api } from "@/lib/axios-config";
import { OrderResponse } from "@/types/Order";

export const GetOrderInProductionCurrent = async () => {
  const response = await api.get<OrderResponse[] | []>("/order/current");
  return response.data;
};
