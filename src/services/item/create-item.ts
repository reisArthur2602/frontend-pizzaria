"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export interface ICreateItemRequest {
  order_id: string;
  product_id: string;
  quantity: number;
}

export const CreateItem = async (credentials: ICreateItemRequest) => {
  try {
    await api.post("/order/item", credentials);

    revalidatePath("/dashboard/order");

    return {
      sucess: true,
      body: `O item foi adicionado ao pedido !`,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        sucess: false,
        body: error.response?.data.message as string,
      };
    }
  }
};
