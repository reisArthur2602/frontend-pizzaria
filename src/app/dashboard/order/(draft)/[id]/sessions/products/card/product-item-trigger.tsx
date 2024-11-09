import { formatPrice } from "@/utils/format-price";
import { ProductResponse } from "@/types/Product";
import Image from "next/image";

type Props = {
  product: Omit<ProductResponse, "category">;
};

const ProductItemTrigger = ({ product }: Props) => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-center gap-4 hover:animate-pulse">
      <div className="relative h-[15rem] w-full">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center">
        <p className="capitalize">{product.name}</p>
        <b className="text-primary">{formatPrice(product.price)}</b>
      </div>
    </div>
  );
};

export default ProductItemTrigger;
