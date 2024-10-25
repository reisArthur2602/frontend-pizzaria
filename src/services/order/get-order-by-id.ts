"use server";

import { api } from "@/lib/axios-config";
import { OrderResponse } from "@/types/Order";

export const GetOrderById = async (id: string) => {
  const response = await api.get<OrderResponse>("/order/show", {
    params: { id },
  });

  return response.data;
};
