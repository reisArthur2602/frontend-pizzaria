"use server";

import { api } from "@/lib/axios-config";

export interface IGetCategoryResponse {
  id: string;
  name: string;
  created_at: string;
  Product: {
    id: string;
    name: string;
    category_id: string;
    description: string;
    image_url: string;
    price: number;
    created_at: string;
  }[];
}

export const GetCategory = async () => {
  const response = await api.get<IGetCategoryResponse[] | []>("/category");
  return response.data;
};
