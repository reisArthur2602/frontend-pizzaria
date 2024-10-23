"use server";

import { api } from "@/lib/axios-config";
import { CategoryRequest } from "@/types/Category";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const CreateCategory = async (credentials: CategoryRequest) => {
  try {
    await api.post("/category", credentials);

    revalidatePath("/dashboard/category");

    return {
      sucess: true,
      body: `A Categoria ${credentials.name} Foi Cadastrada com Sucesso!`,
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
