"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export interface IDeleteCategoryRequest {
  id: string;
}

export const DeleteCategory = async (credentials: IDeleteCategoryRequest) => {
  try {
    await api.delete("/category", { params: credentials });

    revalidatePath("/dashboard/category");

    return {
      sucess: true,
      body: "A categoria foi removida com sucesso",
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
