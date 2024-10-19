"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export interface IFinishOrderRequest {
  id: string;
}

export const FinishOrder = async (credentials: IFinishOrderRequest) => {
  try {
    await api.patch(`/order/finish?id=${credentials.id}`);

    revalidatePath("/dashboard/order");

    return {
      sucess: true,
      body: "O pedido foi finalizado com sucesso",
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
