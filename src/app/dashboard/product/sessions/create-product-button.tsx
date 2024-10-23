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

import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChangeEvent, useState } from "react";

import { toast } from "sonner";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CategoryResponse } from "@/types/Category";
import { registerProductSchema } from "@/lib/zod/Product";
import { CreateProduct } from "@/services/product/create-product";

type Props = {
  categories: CategoryResponse[] | [];
};

const CreateProductButton = ({ categories }: Props) => {
  const [category_id, setCategoryId] = useState("");
  const [image, setImage] = useState<File>();

  const form = useForm({ resolver: zodResolver(registerProductSchema) });

  const handleRegisterProduct = form.handleSubmit(async (credentials) => {
    if (!image) {
      toast.error("A imagem do produto é obrigatória");
      return;
    }

    const formData = new FormData();

    formData.append("name", credentials.name);
    formData.append("price", credentials.price);
    formData.append("description", credentials.description);
    formData.append("category_id", category_id);
    formData.append("file", image);

    const response = await CreateProduct(formData);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    form.reset();
    toast.success(response.body);
  });

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        toast.error("Insira uma imagem no formato PNG ou JPEG/JPG");
        return;
      }

      setImage(image);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Novo Produto</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Produto</DialogTitle>
          <DialogDescription>
            Prencha o formulário para cadastrar um produto
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleRegisterProduct}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="image_url">Imagem</Label>
            <input
              id="image_url"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleFile}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category_id">Categoria</Label>

            <Select onValueChange={(e) => setCategoryId(e)} value={category_id}>
              <SelectTrigger id="category_id">
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem value={category.id} key={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Nome do Produto"
                autoFocus
                {...form.register("name")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Valor</Label>
              <Input id="price" placeholder="R$" {...form.register("price")} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Descreva o produto..."
              {...form.register("description")}
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

export default CreateProductButton;
