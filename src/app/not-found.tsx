import { Button } from "@/components/ui/button";
import Link from "next/link";

import Logo from "./dashboard/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada - Painel Admin",
};

const NotFound = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Logo />
      <h1 className="text-4xl font-bold">OPS! A página não foi encontrada</h1>
      <p className="text-zinc-400">
        A página que você tentou acessar esta indisponível ou não existe
      </p>

      <Button asChild>
        <Link href={"/sign"}>Retornar a página inicial</Link>
      </Button>
    </div>
  );
};

export default NotFound;
