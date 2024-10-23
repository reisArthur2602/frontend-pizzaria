"use server";

import { api } from "@/lib/axios-config";
import { UserAuthenticatedResponse, UserRequest } from "@/types/User";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export const SessionUser = async (credentials: UserRequest) => {
  try {
    const { token } = (
      await api.post<UserAuthenticatedResponse>("/user/session", credentials)
    ).data;

    const week = 24 * 60 * 60 * 1000 * 7;

    const configCookie = {
      maxAge: week,
      httpOnly: false,
      path: "/",
      secure: false,
    };

    cookies().set("session", token, configCookie);

    return {
      sucess: true,
      body: "Olá seja bem-vindo de volta",
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
