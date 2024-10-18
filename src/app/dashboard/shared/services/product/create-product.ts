"use server";
import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";

// export interface ICreateProductRequest {
//   name: string;
//   description: string;
//   category_id: string;
//   price: string;
// }

export const CreateProduct = async (credentials: FormData) => {
  try {
    await api.post("/product", credentials);

    revalidatePath("/dashboard/product");

    return {
      sucess: true,
      body: `O Produto foi cadastrado com sucesso!`,
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
