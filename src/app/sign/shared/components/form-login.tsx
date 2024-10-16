"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ISessionUserRequest, SessionUser } from "../services/session-user";
import { sessionUserSchema } from "../lib/zod/session-user-schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const FormLogin = () => {
  const form = useForm<ISessionUserRequest>({
    resolver: zodResolver(sessionUserSchema),
  });

  const router = useRouter();

  const handleSession = form.handleSubmit(async (credentials) => {
    const response = await SessionUser(credentials);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    toast.success(response.body);
    router.replace("/sign");
  });

  return (
    <form
      onSubmit={handleSession}
      className="flex w-full max-w-96 flex-col gap-6"
    >
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-zinc-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>

      <Input placeholder="Digite seu email" {...form.register("email")} />
      <Input
        placeholder="******"
        type="password"
        {...form.register("password")}
      />
      <Button>Cadastrar</Button>
      <Link
        href="/sign/register"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Ainda não possui uma conta? Clique Aqui
      </Link>
    </form>
  );
};

export default FormLogin;
