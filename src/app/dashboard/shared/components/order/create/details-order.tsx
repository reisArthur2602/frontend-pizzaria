import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { IGetOrderByIdResponse } from "../../../services/order/get-order-by-id";

import { formatPrice } from "../../../utils/format-price";
import { calculateTotalItemsOrder } from "../../../utils/calculate-total-items-order";
import SendOrderButton from "./send-order-button";
import DetailProductItem from "./detail-product-item";
import DeleteOrderInDraftButtonButton from "./delete-order-in-draft-button";

interface IDetailsOrder {
  order: IGetOrderByIdResponse;
}

const DetailsOrder = ({ order }: IDetailsOrder) => {
  const taxa = calculateTotalItemsOrder(order) * 0.03;

  const subtotal = formatPrice(calculateTotalItemsOrder(order));
  const totalPrice = formatPrice(calculateTotalItemsOrder(order) + taxa);
  const count = order.Item.length;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} variant={"secondary"} className="relative">
          <ShoppingBag />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-zinc-50">
              {count}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Detalhes do Pedido</SheetTitle>
          <SheetDescription>Mesa {order.table}</SheetDescription>
        </SheetHeader>

        <aside className="flex flex-1 flex-col justify-between gap-4">
          <div className="flex h-[27.5rem] w-full flex-col overflow-y-auto">
            {order.Item.map((item) => (
              <DetailProductItem
                key={item.id}
                product={{
                  ...item.product,
                  quantity: item.quantity,
                  item_id: item.id,
                }}
              />
            ))}
          </div>

          <div className="rounded-lg bg-zinc-50 text-sm text-zinc-500">
            <div className="flex items-center justify-between p-5">
              <p>Taxa 3%:</p>
              <p>{formatPrice(taxa)}</p>
            </div>
            <div className="flex items-center justify-between p-5">
              <p>Subtotal:</p>
              <p>{subtotal}</p>
            </div>
            <div className="flex items-center justify-between p-5 font-medium text-zinc-700">
              <b>Total:</b>
              <p className="text-primary">{totalPrice}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SendOrderButton id={order.id} />
            <DeleteOrderInDraftButtonButton id={order.id} />
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default DetailsOrder;
