"use client";

import React from "react";
import { formatPrice } from "../../../utils/format-price";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { DeleteItem } from "../../../services/item/delete-item";
import { toast } from "sonner";

interface IDetailProductItem {
  product: {
    item_id: string;
    image_url: string;
    name: string;
    quantity: number;
    price: number;
  };
}

const DetailProductItem = ({ product }: IDetailProductItem) => {
  const handleDeleteItem = async (id: string) => {
    const response = await DeleteItem({ id });
    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      toast.success(response.body);
    } else {
      toast.error("Erro ao deletar item, tente novamente mais tarde");
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 border-b py-4">
      <div className="flex items-center gap-4 text-sm">
        <div className="relative size-20">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${product.image_url}`}
            alt={product.name}
            className="rounded-sm object-cover"
            fill
          />
        </div>

        <div className="space-y-2">
          <Badge variant={"secondary"}>{product.quantity}x</Badge>
          <p className="max-w-40 truncate capitalize">{product.name}</p>
          <b className="text-primary">{formatPrice(product.price)}</b>
        </div>
      </div>

      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={() => handleDeleteItem(product.item_id)}
      >
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default DetailProductItem;
