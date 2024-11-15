"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const LogoutUser = () => {
  cookies().delete("session");
  redirect("/sign");
};
