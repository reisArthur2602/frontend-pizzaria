import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/format-price";
import AddProductInCart from "./add-product-in-cart";
import { ProductResponse } from "@/types/Product";
import ProductItemTrigger from "./product-item-trigger";

type Props = {
  product: Omit<ProductResponse, "category">;
  order_id: string;
};

const ProductCard = ({ product, order_id }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <ProductItemTrigger product={product} />
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

          <AddProductInCart product_id={product.id} order_id={order_id} />
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCard;
