"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export interface IDeleteOrderRequest {
  id: string;
}

export const DeleteOrder = async (credentials: IDeleteOrderRequest) => {
  try {
    await api.delete("/order", { params: credentials });

    revalidatePath("/dashboard/order");

    return {
      sucess: true,
      body: "O pedido foi removido com sucesso",
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