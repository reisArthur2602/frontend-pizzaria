import React from "react";

import { GetCategory } from "../../shared/services/category/get-category";
import SearchProduct from "../../shared/components/order/create/search-product";

import ProductsList from "../../shared/components/order/create/products-list";
import { cookies } from "next/headers";

const Create = async () => {
  const categories = await GetCategory();
  const order_id = cookies().get("order-in-draft")?.value as string;
  return (
    <div>
      <div className="flex flex-col gap-9">
        <div>
          <h1 className="text-xl font-bold">Cardápio</h1>
          <p className="text-sm text-zinc-400">Adicione itens ao seu pedido</p>
        </div>

        <SearchProduct />

        <ProductsList categories={categories} order_id={order_id} />
      </div>
    </div>
  );
};

export default Create;
