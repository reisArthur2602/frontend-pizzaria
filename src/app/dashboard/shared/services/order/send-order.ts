"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export interface ISendOrderRequest {
  id: string;
}

export const SendOrder = async (credentials: ISendOrderRequest) => {
  try {
    await api.patch(`/order/send?id=${credentials.id}`);

    cookies().delete("order-in-draft");

    revalidatePath("/dashboard");

    return {
      sucess: true,
      body: "O pedido foi enviado com sucesso",
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
