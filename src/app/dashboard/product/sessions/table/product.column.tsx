"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import DeleteProductButton from "./delete-product-button";
import ViewProductButton from "./view-product-button";
import { ProductResponse } from "@/types/Product";
import Image from "next/image";
import { formatPrice } from "@/utils/format-price";
import { Badge } from "@/components/ui/badge";

export const productColumns: ColumnDef<ProductResponse>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "image_url",
    header: "Imagem",
    cell: ({ row: { original: product } }) => (
      <div className="relative h-20 w-32">
        <Image
          src={product.image_url}
          fill
          alt={product.name}
          className="object-cover"
        />
      </div>
    ),
  },

  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "created_at",
    header: "Cadastro",
    cell: ({ row: { original: product } }) =>
      format(product.created_at, "dd/MM/yyyy"),
  },

  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row: { original: product } }) => formatPrice(product.price),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: product } }) => (
      <Badge className="capitalize">{product.category.name}</Badge>
    ),
  },

  {
    accessorKey: "created_at",
    header: "Cadastro",
    cell: ({ row: { original: product } }) =>
      format(product.created_at, "dd/MM/yyyy"),
  },

  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: product } }) => (
      <div className="flex items-center gap-3">
        <DeleteProductButton id={product.id} />
        <ViewProductButton product={product} />
      </div>
    ),
  },
];
