import React from "react";
import { formatPrice } from "../../../utils/format-price";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface IDetailProductItem {
  product: {
    id: string;
    image_url: string;
    name: string;
    quantity: number;
    price: number;
  };
}

const DetailProductItem = ({ product }: IDetailProductItem) => {
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

      <Button variant={"destructive"} size={"icon"}>
        <Trash size={20} />
      </Button>
    </div>
  );
};

export default DetailProductItem;
