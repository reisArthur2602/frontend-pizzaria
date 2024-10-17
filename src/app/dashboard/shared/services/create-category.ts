"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";

export interface ICreateCategoryRequest {
  name: string;
}

export const CreateCategory = async (credentials: ICreateCategoryRequest) => {
  try {
    await api.post("/category", credentials);

    return {
      sucess: true,
      body: `A categoria ${credentials.name} foi cadastrada com sucesso!`,
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
