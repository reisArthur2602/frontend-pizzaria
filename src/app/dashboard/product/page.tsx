import React from "react";
import DialogCreateProduct from "../shared/components/product/dialog-create-product";

import { GetProduct } from "../shared/services/product/get-product";
import TableProduct from "../shared/components/product/table-product";
import { GetCategory } from "@/services/category/get-category";

const Product = async () => {
  const categories = await GetCategory();
  const products = await GetProduct();

  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Produtos</h1>
          <p className="text-sm text-zinc-400">Gerencie seus produtos</p>
        </div>
        <DialogCreateProduct categories={categories} />
      </section>
      <TableProduct products={products} />
    </div>
  );
};

export default Product;
