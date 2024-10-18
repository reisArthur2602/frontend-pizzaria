"use server";

import { api } from "@/lib/axios-config";

export interface IGetProductResponse {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: string;
  category: {
    name: string;
    id: string;
    created_at: Date;
  };
}

export const GetProduct = async () => {
  const response = await api.get<IGetProductResponse[]>("/product");
  return response.data;
};
