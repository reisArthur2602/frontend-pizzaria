"use server";

import { api } from "@/lib/axios-config";
import { OrderRequest, OrderResponse } from "@/types/Order";
import { AxiosError } from "axios";

import { cookies } from "next/headers";

export const CreateOrder = async (credentials: OrderRequest) => {
  try {
    const { id } = (await api.post<OrderResponse>("/order", credentials)).data;

    const week = 24 * 60 * 60 * 1000 * 7;

    const configCookie = {
      maxAge: week,
      httpOnly: false,
      path: "/",
      secure: false,
    };

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
