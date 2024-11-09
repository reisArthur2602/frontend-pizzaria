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

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ProductResponse } from "@/types/Product";
import { formatPrice } from "@/utils/format-price";
import { format } from "date-fns";

type Props = {
  product: ProductResponse;
};

const ViewProductButton = ({ product }: Props) => {
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
            src={product.image_url}
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
            <p className="text-zinc-500">
              {format(product.created_at, "dd/MM/yyyy")}
            </p>
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

export default ViewProductButton;
