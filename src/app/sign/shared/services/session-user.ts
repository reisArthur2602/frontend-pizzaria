"use server";

import { api } from "@/lib/axios-config";
import { AxiosError } from "axios";
import { cookies } from "next/headers";

export interface ISessionUserRequest {
  email: string;
  password: string;
}

export interface ISessionUserResponse {
  user: { email: string; password: string };
  token: string;
}

export const SessionUser = async (credentials: ISessionUserRequest) => {
  try {
    const { token } = (
      await api.post<ISessionUserResponse>("/user/session", credentials)
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
