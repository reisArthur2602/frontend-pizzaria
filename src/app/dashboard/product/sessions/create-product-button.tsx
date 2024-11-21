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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

import { toast } from "sonner";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CategoryResponse } from "@/types/Category";
import { registerProductSchema } from "@/lib/zod/Product";
import { CreateProduct } from "@/services/product/create-product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductRequest } from "@/types/Product";
import { Textarea } from "@/components/ui/textarea";
import { MoneyInput } from "@/app/dashboard/components/money-input";
import Dropzone from "react-dropzone";
import Image from "next/image";

type Props = {
  categories: CategoryResponse[] | [];
};

const CreateProductButton = ({ categories }: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<ProductRequest>({
    resolver: zodResolver(registerProductSchema),
    defaultValues: {
      name: "",
      category_id: categories.length > 0 ? categories[0].id : "",
      description: "",
      price: 10,
      image_url: null,
    },
  });

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onCloseDialog = () => {
    setPreview(null);
    form.reset();
  };

  const handleRegisterProduct = form.handleSubmit(async (credentials) => {
    if (!image) {
      toast.error("Por favor, selecione uma imagem.");
      return;
    }

    const formData = new FormData();

    formData.append("name", credentials.name);
    formData.append("category_id", credentials.category_id);
    formData.append("description", credentials.description);
    formData.append("price", credentials.price.toString());
    formData.append("file", credentials.image_url as File);

    const response = await CreateProduct(formData);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    form.reset();
    setImage(null);
    setPreview(null);
    toast.success(response.body);
  });

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

        <Form {...form}>
          <form className="space-y-6" onSubmit={handleRegisterProduct}>
            <FormField
              name="image_url"
              control={form.control}
              render={() => (
                <FormItem>
                  <FormLabel>Imagem</FormLabel>
                  <Controller
                    control={form.control}
                    name="image_url"
                    render={({ field: { onChange } }) => (
                      <Dropzone
                        onDrop={(acceptedFiles) => {
                          onChange(acceptedFiles[0]);
                          onDrop(acceptedFiles);
                        }}
                        accept={{ "image/jpeg": [], "image/png": [] }}
                        maxFiles={1}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div
                            {...getRootProps()}
                            className="rounded border-2 border-dashed p-4"
                          >
                            <input {...getInputProps()} />
                            {preview ? (
                              <Image
                                src={preview}
                                alt="Preview"
                                height={128}
                                width={128}
                                className="object-cover"
                              />
                            ) : (
                              <p>
                                Arraste e solte uma imagem ou clique para
                                selecionar
                              </p>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    )}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoria</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma Categoria" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent className="capitalize">
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do produto." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="Digite o preço"
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva o produto..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  type="button"
                  disabled={form.formState.isSubmitting}
                  onClick={onCloseDialog}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductButton;
