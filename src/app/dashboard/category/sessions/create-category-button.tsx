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
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { CategoryRequest } from "@/types/Category";

import { registerCategorySchema } from "@/lib/zod/Category";
import { CreateCategory } from "@/services/category/create-category";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const CreateCategoryButton = () => {
  const form = useForm<CategoryRequest>({
    resolver: zodResolver(registerCategorySchema),
    defaultValues: {
      name: "",
    },
  });

  const handleCreateCategory = form.handleSubmit(async (credentials) => {
    const response = await CreateCategory(credentials);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }
    form.reset();
    toast.success(response.body);
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

        <Form {...form}>
          <form onSubmit={handleCreateCategory} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome da categoria..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" type="button">
                  Cancelar
                </Button>
              </DialogClose>
              <Button>Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryButton;
