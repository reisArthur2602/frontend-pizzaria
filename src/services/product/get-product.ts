"use server";

import { api } from "@/lib/axios-config";
import { ProductResponse } from "@/types/Product";

export const GetProduct = async () => {
  const response = await api.get<ProductResponse[]>("/product");
  return response.data;
};
