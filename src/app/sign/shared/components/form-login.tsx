"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const FormLogin = () => {
  return (
    <form className="flex w-full max-w-96 flex-col gap-6">
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-zinc-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>

      <Input placeholder="Digite seu email" type="text" />
      <Input placeholder="******" type="password" />
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
