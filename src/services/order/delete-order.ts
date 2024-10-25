"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const DeleteOrder = async (id: string) => {
  try {
    await api.delete("/order", { params: { id } });

    cookies().delete("order-in-draft");

    revalidatePath("/dashboard");

    return {
      sucess: true,
      body: "O Pedido Foi Removido Com Sucesso!",
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
