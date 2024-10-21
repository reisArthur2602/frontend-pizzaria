"use server";

import { api } from "@/lib/axios-config";

export interface IGetOrders {
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

export const GetOrders = async () => {
  const response = await api.get<IGetOrders[] | []>("/order");
  return response.data;
};
