"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserRequest } from "@/types/User";

import Logo from "@/components/logo";
import Link from "next/link";
import { RegisterUser } from "@/services/user/register-user";
import { registerUserSchema } from "@/lib/zod/User";

const FormRegister = () => {
  const form = useForm<UserRequest>({
    resolver: zodResolver(registerUserSchema),
  });

  const router = useRouter();

  const handleRegister = form.handleSubmit(async (credentials) => {
    const response = await RegisterUser(credentials);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    toast.success(response.body);
    router.replace("/sign");
  });

  return (
    <form
      onSubmit={handleRegister}
      className="flex w-full max-w-96 flex-col gap-6"
    >
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Cadastro</h1>
        <p className="text-zinc-400">
          Preencha os campos para realizar seu cadastro.
        </p>
      </div>

      <Input
        placeholder="Digite seu email"
        type="text"
        {...form.register("email")}
      />
      <Input
        placeholder="******"
        type="password"
        {...form.register("password")}
      />
      <Button>Cadastrar</Button>
      <Link
        href="/sign"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Já possui uma conta? Clique Aqui
      </Link>
    </form>
  );
};

export default FormRegister;
