"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import {
  CreateCategory,
  ICreateCategoryRequest,
} from "../services/create-category";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerCategorySchema } from "../lib/zod/register-category-schema";
import { toast } from "sonner";

const DialogCreateCategory = () => {
  const form = useForm<ICreateCategoryRequest>({
    resolver: zodResolver(registerCategorySchema),
  });

  const handleRegister = form.handleSubmit(async (credentials) => {
    const response = await CreateCategory(credentials);

    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      form.reset();
      toast.success(response.body);
    } else {
      toast.error("Erro ao cadastrar categoria, tente novamente mais tarde");
    }
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Nova Categoria</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Categoria</DialogTitle>
          <DialogDescription>
            Prencha o formulário para cadastrar uma categoria
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleRegister}>
          <div className="mb-4 flex items-center gap-3 text-right">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="Nome da categoria"
              autoFocus
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button>Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateCategory;
