import axios from "axios";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

api.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});
