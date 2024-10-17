"use server";

import { api } from "@/lib/axios-config";

export interface IGetCategoryResponse {
  id: string;
  name: string;
  created_at: string;
  products: [];
}

export const GetCategory = async () => {
  const response = await api.get<IGetCategoryResponse[]>("/category");
  return response.data;
};
