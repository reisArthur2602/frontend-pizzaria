import React from "react";

import { redirect } from "next/navigation";
import { GetCategory } from "@/services/category/get-category";
import CartOrder from "./sessions/cart/cart-order";

import Products from "./sessions/products/products";
import { GetOrderById } from "@/services/order/get-order-by-id";

type Props = {
  params: { id: string };
};

const DraftPage = async ({ params }: Props) => {
  const categories = await GetCategory();

  const id = params.id;

  const order = await GetOrderById(id).catch(() => {
    return redirect("/dashboard");
  });

  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">Cardápio</h1>
            <p className="text-sm text-zinc-400">
              Adicione itens ao seu pedido
            </p>
          </div>

          <CartOrder order={order} />
        </div>

        <Products categories={categories} order_id={order.id} />
      </div>
    </>
  );
};

export default DraftPage;
