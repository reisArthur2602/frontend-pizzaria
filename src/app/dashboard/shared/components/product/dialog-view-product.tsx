import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { File } from "lucide-react";
import React from "react";
import { IGetProductResponse } from "../../services/product/get-product";
import Image from "next/image";
import { formatDate } from "../../utils/format-date";
import { formatPrice } from "../../utils/format-price";
import { Badge } from "@/components/ui/badge";

interface IViewProductTable {
  product: IGetProductResponse;
}

const DialogViewProduct = ({ product }: IViewProductTable) => {
  return (
    <Dialog>
      <DialogTrigger>
        <File size={20} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes do Produto</DialogTitle>
          <DialogDescription>
            Visualize todos os detalhes do produto
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-60">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${product.image_url}`}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <section className="flex flex-col text-sm">
          <div className="flex items-center justify-between border-b py-4">
            <b>Id:</b>
            <p className="text-zinc-500">{product.id}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Nome:</b>
            <p className="capitalize text-zinc-500">{product.name}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Categoria:</b>
            <Badge className="capitalize">{product.category.name}</Badge>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Preço:</b>
            <p className="text-zinc-500">{formatPrice(product.price)}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Cadastro:</b>
            <p className="text-zinc-500">{formatDate(product.created_at)}</p>
          </div>

          <div className="flex flex-col gap-2 py-4">
            <b>Descrição</b>
            <p className="text-zinc-500">{product.description}</p>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default DialogViewProduct;
