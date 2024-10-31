import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { formatPrice } from "../utils/format-price";

interface ICardItem {
  image_url: string;
  product_name: string;
  quantity?: number;
  price: number;
}

const CardItem = ({ image_url, price, product_name, quantity }: ICardItem) => {
  return (
    <div className="flex w-full items-center justify-between gap-4 border-b py-4">
      <div className="flex flex-1 items-center gap-3 text-xs">
        <div className="relative h-16 w-20">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}/files/${image_url}`}
            alt={product_name}
            fill
            className="object-fill"
          />
        </div>

        <div className="flex flex-col">
          <p className="capitalize">{product_name}</p>
          <b className="text-primary">{formatPrice(price)}</b>
        </div>
      </div>
      {quantity && <Badge variant={"secondary"}>{quantity}x</Badge>}
    </div>
  );
};

export default CardItem;
