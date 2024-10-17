import axios from "axios";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

api.interceptors.request.use((config) => {
  const token = cookies().get("session")?.value as string;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, null);
