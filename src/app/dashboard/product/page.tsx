import React from "react";
import DialogCreateProduct from "../shared/components/product/dialog-create-product";
import { GetCategory } from "../shared/services/category/get-category";

const Product = async () => {
  const categories = await GetCategory();
  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Produtos</h1>
          <p className="text-sm text-zinc-400">Gerencie seus produtos</p>
        </div>
        <DialogCreateProduct categories={categories} />
      </section>
    </div>
  );
};

export default Product;
