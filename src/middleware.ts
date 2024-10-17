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

  // Se o token não existir e o usuário não estiver tentando acessar "/sign", redirecione para "/sign"
  if (!token) {
    if (request.nextUrl.pathname !== "/sign") {
      return NextResponse.redirect(unauthorizedURL);
    }
    return NextResponse.next();
  }

  // Se o token existir, valide o usuário
  const response = await getUser();

  // Se o token for inválido, redirecione para "/sign" apenas se o usuário não estiver já na página de "/sign"
  if (!response?.authorized && request.nextUrl.pathname !== "/sign") {
    return NextResponse.redirect(unauthorizedURL);
  }

  // Se o usuário estiver autenticado e tentar acessar "/sign", redirecione para "/dashboard"
  if (response?.authorized && request.nextUrl.pathname === "/sign") {
    return NextResponse.redirect(authorizedURL);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/sign/:path*", "/dashboard/:path*"],
};
