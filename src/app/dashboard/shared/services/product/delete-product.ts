"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export interface IDeleteProductRequest {
  id: string;
}

export const DeleteProduct = async (credentials: IDeleteProductRequest) => {
  try {
    await api.delete("/product", { params: credentials });

    revalidatePath("/dashboard/product");

    return {
      sucess: true,
      body: "O Produto foi removido com sucesso",
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
