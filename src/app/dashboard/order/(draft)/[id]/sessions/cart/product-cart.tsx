"use client";

import React from "react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

import { toast } from "sonner";

import { formatPrice } from "@/utils/format-price";

import { ItemResponse } from "@/types/Item";
import { DeleteItem } from "@/services/item/delete-item";

type Props = {
  item: ItemResponse;
};

const ProductCart = ({ item }: Props) => {
  const handleDeleteItem = async (id: string) => {
    const response = await DeleteItem(id);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }
    toast.success(response.body);
  };

  return (
    <div className="flex items-center justify-between gap-2 border-b py-4">
      <div className="flex items-center gap-4 text-sm">
        <div className="relative h-20 w-24">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${item.product.image_url}`}
            alt={item.product.name}
            className="rounded-sm object-cover"
            fill
          />
        </div>

        <div className="flex flex-col gap-2">
          <Badge variant={"secondary"} className="w-fit">
            {item.quantity}x
          </Badge>
          <p className="w-full max-w-44 truncate capitalize">
            {item.product.name}
          </p>
          <b className="text-primary">{formatPrice(item.product.price)}</b>
        </div>
      </div>

      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={() => handleDeleteItem(item.id)}
      >
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default ProductCart;
