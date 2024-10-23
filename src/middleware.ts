import { NextRequest, NextResponse } from "next/server";
import { api } from "./lib/axios-config";
import { AxiosError } from "axios";

const getUser = async () => {
  try {
    await api.get("/user/details");
    return { authorized: true };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { authorized: false };
    }
  }
};

export const middleware = async (request: NextRequest) => {
  const unauthorizedURL = new URL("/sign", request.url);
  const authorizedURL = new URL("/dashboard", request.url);

  const token = request.cookies.get("session")?.value;

  if (!token) {
    if (
      request.nextUrl.pathname !== "/sign" &&
      request.nextUrl.pathname !== "/sign/register"
    ) {
      return NextResponse.redirect(unauthorizedURL);
    }
    return NextResponse.next();
  }

  const response = await getUser();

  if (
    !response?.authorized &&
    request.nextUrl.pathname !== "/sign" &&
    request.nextUrl.pathname !== "/sign/register"
  ) {
    return NextResponse.redirect(unauthorizedURL);
  }

  if (response?.authorized && request.nextUrl.pathname === "/sign") {
    return NextResponse.redirect(authorizedURL);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/sign/:path*", "/dashboard/:path*"],
};
