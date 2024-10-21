import React from "react";

import Image from "next/image";

import { formatPrice } from "../../../utils/format-price";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import AddItemOrder from "./add-item-order";

interface iProductCard {
  product: {
    id: string;
    name: string;
    category_id: string;
    description: string;
    image_url: string;
    price: number;
    created_at: string;
  };
  order_id: string;
}

const ProductCard = ({ product, order_id }: iProductCard) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article className="flex w-full max-w-80 cursor-pointer flex-col items-center justify-center gap-4 hover:animate-pulse">
          <div className="relative h-[18.75rem] w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}/files/${product.image_url}`}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center">
            <p className="capitalize">{product.name}</p>
            <b className="text-primary">{formatPrice(product.price)}</b>
          </div>
        </article>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo Item</DialogTitle>
          <DialogDescription>Adicionar item ao pedido</DialogDescription>
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
            <b>Nome:</b>
            <p className="capitalize text-zinc-500">{product.name}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Preço:</b>
            <Badge>{formatPrice(product.price)}</Badge>
          </div>

          <div className="flex flex-col border-b py-4">
            <b>Descrição</b>
            <p className="text-zinc-500">{product.description}</p>
          </div>

          <AddItemOrder product_id={product.id} order_id={order_id} />
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
