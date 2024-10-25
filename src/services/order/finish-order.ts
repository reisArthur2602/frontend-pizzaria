"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const FinishOrder = async (id: string) => {
  try {
    await api.patch(`/order/finish?id=${id}`);

    revalidatePath("/dashboard");

    return {
      sucess: true,
      body: "O Pedido Foi Finalizado Com Sucesso!",
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
