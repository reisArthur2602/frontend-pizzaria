"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const DeleteItem = async (id: string) => {
  try {
    await api.delete("/order/item", { params: { id } });

    revalidatePath("/dashboard/");

    return {
      sucess: true,
      body: "O item foi removido com sucesso",
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
