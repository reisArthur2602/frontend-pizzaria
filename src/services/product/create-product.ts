"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

export const CreateProduct = async (form: FormData) => {
  try {
    await api.post("/product", form);

    revalidatePath("/dashboard/product");

    return {
      sucess: true,
      body: `O Produto foi cadastrado Com sucesso!`,
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
