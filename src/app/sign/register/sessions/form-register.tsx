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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormRegister = () => {
  const form = useForm<UserRequest>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: { email: "", password: "" },
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
    <div className="flex w-full max-w-96 flex-col gap-6">
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Cadastro</h1>
        <p className="text-zinc-400">
          Preencha os campos para realizar seu cadastro.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleRegister} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o seu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input placeholder="******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Cadastrar</Button>
        </form>
      </Form>

      <Link
        href="/sign/register"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Já possui uma conta? Clique Aqui
      </Link>
    </div>
  );
};

export default FormRegister;
