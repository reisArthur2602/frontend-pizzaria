"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";

export interface IGetOrderByIdRequest {
  id: string;
}

export interface IGetOrderByIdResponse {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: string;
  Item:
    | {
        id: string;
        order_id: string;
        product_id: string;
        quantity: number;
        created_at: string;
        product: {
          id: string;
          name: string;
          category_id: string;
          description: string;
          image_url: string;
          price: number;
          created_at: string;
        };
      }[]
    | [];
}
export const GetOrderById = async (credentials: IGetOrderByIdRequest) => {
  try {
    const response = await api.get<IGetOrderByIdResponse>("/order/show", {
      params: credentials,
    });

    return {
      sucess: true,
      body: response.data,
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
