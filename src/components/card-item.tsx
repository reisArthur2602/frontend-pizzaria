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
    <div className="flex items-center justify-between gap-4 border-b py-4">
      <div className="flex items-center gap-4 text-sm">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}/files/${image_url}`}
          alt={product_name}
          height={80}
          width={100}
          className="rounded-sm object-cover"
        />
        <div className="space-y-2">
          <p className="capitalize">{product_name}</p>
          <b className="text-primary">{formatPrice(price)}</b>
        </div>
      </div>

      {quantity && <Badge>{quantity}x</Badge>}
    </div>
  );
};

export default CardItem;
