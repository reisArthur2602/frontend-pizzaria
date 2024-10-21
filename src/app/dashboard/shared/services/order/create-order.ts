"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export interface ICreateOrderRequest {
  table: number;
}

export interface ICreateOrderResponse {
  id: string;
}

export const CreateOrder = async (credentials: ICreateOrderRequest) => {
  try {
    const { id } = (await api.post<ICreateOrderResponse>("/order", credentials))
      .data;

    const week = 24 * 60 * 60 * 1000 * 7;

    const configCookie = {
      maxAge: week,
      httpOnly: false,
      path: "/",
      secure: false,
    };

    revalidatePath("/dashboard");
    cookies().set("order-in-draft", id, configCookie);

    return {
      sucess: true,
      body: id,
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
