"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRequest } from "@/types/User";

import Logo from "@/app/dashboard/components/logo";
import Link from "next/link";
import { SessionUser } from "@/services/user/session-user";
import { sessionUserSchema } from "@/lib/zod/User";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormLogin = () => {
  const form = useForm<UserRequest>({
    resolver: zodResolver(sessionUserSchema),
    defaultValues: {
      email: "guest@guest.com",
      password: "123456",
    },
  });

  const router = useRouter();

  const handleSession = form.handleSubmit(async (credentials) => {
    const response = await SessionUser(credentials);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    toast.success(response.body);
    router.replace("/dashboard");
  });

  return (
    <div className="flex w-full max-w-96 flex-col gap-6">
      <div className="flex items-center justify-center">
        <Logo />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="text-zinc-400">
          Use suas credenciais para realizar o login.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSession} className="space-y-6">
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

          <Button className="w-full">Acessar</Button>
        </form>
      </Form>

      <Link
        href="/sign/register"
        className="text-center text-sm transition-all hover:text-primary"
      >
        Ainda não possui uma conta? Clique Aqui
      </Link>
    </div>
  );
};

export default FormLogin;
