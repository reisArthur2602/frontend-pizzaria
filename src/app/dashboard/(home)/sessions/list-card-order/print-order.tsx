import { OrderResponse } from "@/types/Order";
import { calculateTotalItemsOrder } from "@/utils/calculate-total-items-order";
import { formatPrice } from "@/utils/format-price";
import { format } from "date-fns";
import React from "react";

type Props = {
  order: OrderResponse;
};

const PrintOrder = ({ order }: Props) => {
  return (
    <section className="mx-auto hidden w-[25rem] text-xs print:block">
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between border-b py-3">
          <b>ID:</b>
          <p className="text-zinc-500">{order.id}</p>
        </div>

        <div className="flex items-center justify-between border-b py-3">
          <b>Mesa:</b>
          <p className="capitalize text-zinc-500">{order.table}</p>
        </div>

        <div className="flex items-center justify-between border-b py-3">
          <b>Cadastro:</b>
          <p className="capitalize text-zinc-500">
            {format(order.created_at, "dd/MM/yyyy")}
          </p>
        </div>

        <div className="flex items-center justify-between border-b py-3">
          <b>Total:</b>
          <p>{formatPrice(calculateTotalItemsOrder(order))}</p>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <b>Items do pedido:</b>
          {order.Item.map((item) => (
            <div
              key={item.id}
              className="flex w-full items-center justify-between"
            >
              <div>
                <p>{item.quantity}x</p>
                <p className="capitalize">{item.product.name}</p>
              </div>
              <p>{formatPrice(item.product.price)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintOrder;
