import { calculateTotalItemsOrder } from "@/utils/calculate-total-items-order";
import { formatPrice } from "@/utils/format-price";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { OrderResponse } from "@/types/Order";

import { CartOrderButton } from "./cart-order-button";

import ProductCart from "./product-cart";
import DeleteOrderCartButton from "./delete-order-cart-button";
import SendOrderCartButton from "./send-order-cart-button";

type Props = {
  order: OrderResponse;
};

const CartOrder = ({ order }: Props) => {
  const taxa = calculateTotalItemsOrder(order) * 0.03;
  const subtotal = formatPrice(calculateTotalItemsOrder(order));
  const totalPrice = formatPrice(calculateTotalItemsOrder(order) + taxa);

  const count = order.Item.length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <CartOrderButton count={count} />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Detalhes do Pedido</SheetTitle>
          <SheetDescription>Mesa {order.table}</SheetDescription>
        </SheetHeader>

        <aside className="flex flex-1 flex-col justify-between gap-4">
          <div className="scrollbar-hidden flex h-[27.5rem] w-full flex-col overflow-auto">
            {order.Item.map((item) => (
              <ProductCart key={item.id} item={item} />
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

          <div className="flex flex-col gap-4">
            <SendOrderCartButton id={order.id} />
            <DeleteOrderCartButton id={order.id} />
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default CartOrder;
