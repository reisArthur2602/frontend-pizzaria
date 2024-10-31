"use client";

import { OrderResponse } from "@/types/Order";

import { useState } from "react";
import PrintOrder from "./print-order";
import CardOrder from "./card-order";

type Props = {
  orders: OrderResponse[];
};

const ListCardOrder = ({ orders }: Props) => {
  const [print, setPrint] = useState<OrderResponse | null>(null);

  const handlePrint = (order: OrderResponse) => {
    setPrint(order);
    setTimeout(() => {
      if (window) window.print();
    }, 200);
  };

  return (
    <>
      {print && <PrintOrder order={print} />}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {orders.map((order) => (
          <CardOrder order={order} key={order.id} onPrint={handlePrint} />
        ))}
      </section>
    </>
  );
};

export default ListCardOrder;
