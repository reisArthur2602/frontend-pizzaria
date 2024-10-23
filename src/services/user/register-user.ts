"use server";

import { api } from "@/lib/axios-config";
import { UserRequest } from "@/types/User";
import { AxiosError } from "axios";

export const RegisterUser = async (credentials: UserRequest) => {
  try {
    await api.post("/user/register", credentials);
    return {
      sucess: true,
      body: "O usuário foi cadastrado com sucesso, faça login!",
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
