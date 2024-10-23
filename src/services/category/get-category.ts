"use server";

import { api } from "@/lib/axios-config";
import { CategoryResponse } from "@/types/Category";

export const GetCategory = async () => {
  const response = await api.get<CategoryResponse[] | []>("/category");
  return response.data;
};
