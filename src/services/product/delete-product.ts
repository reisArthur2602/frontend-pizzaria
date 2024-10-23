"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const DeleteProduct = async (id: string) => {
  try {
    await api.delete("/product", { params: { id } });

    revalidatePath("/dashboard/product");

    return {
      sucess: true,
      body: "O Produto Foi Removido Com Sucesso",
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
