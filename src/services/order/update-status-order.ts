"use server";

import { api } from "@/lib/axios-config";
import { OrderStatus } from "@/types/Order";
import { AxiosError } from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const UpdateStatusOrder = async (
  id: string,
  status: Omit<OrderStatus, "DRAFT"> = "PRODUCTION",
) => {
  try {
    await api.patch(`/order/${id}/${status}`);

    cookies().delete("order-in-draft");

    revalidatePath("/dashboard");

    return {
      sucess: true,
      body: "O Pedido Enviado Foi Para Cozinha!",
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
