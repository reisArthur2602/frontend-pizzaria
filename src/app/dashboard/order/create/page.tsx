import React from "react";

import { GetCategory } from "../../shared/services/category/get-category";
import SearchProduct from "../../shared/components/order/create/search-product";

import ProductsList from "../../shared/components/order/create/products-list";
import { cookies } from "next/headers";
import DetailsOrder from "../../shared/components/order/create/details-order";
import { GetOrderById } from "../../shared/services/order/get-order-by-id";

const Create = async () => {
  const categories = await GetCategory();

  const order = await GetOrderById({
    id: cookies().get("order-in-draft")?.value as string,
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

export default Create;
