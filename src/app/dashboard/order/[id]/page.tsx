import React from "react";

import SearchProduct from "../../shared/components/order/create/search-product";

import ProductsList from "../../shared/components/order/create/products-list";

import DetailsOrder from "../../shared/components/order/create/details-order";
import { GetOrderById } from "../../shared/services/order/get-order-by-id";
import { redirect } from "next/navigation";
import { GetCategory } from "@/services/category/get-category";

interface ICreateOrder {
  params: { id: string };
}

const CreateOrder = async ({ params }: ICreateOrder) => {
  const categories = await GetCategory();

  const order = await GetOrderById({
    id: params.id,
  }).catch(() => {
    return redirect("/dashboard");
  });

  return (
    <div>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold">Cardápio</h1>
            <p className="text-sm text-zinc-400">
              Adicione itens ao seu pedido
            </p>
          </div>

          <DetailsOrder order={order} />
        </div>

        <SearchProduct />

        <ProductsList categories={categories} order_id={order.id} />
      </div>
    </div>
  );
};

export default CreateOrder;
