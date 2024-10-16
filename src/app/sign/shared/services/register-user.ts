"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";

export interface IRegisterUserRequest {
  email: string;
  password: string;
}

export const RegisterUser = async (credentials: IRegisterUserRequest) => {
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
