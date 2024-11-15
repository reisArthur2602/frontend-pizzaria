import { Metadata } from "next";
import CreateProductButton from "./sessions/create-product-button";

import { GetCategory } from "@/services/category/get-category";
import { GetProduct } from "@/services/product/get-product";
import { DataTable } from "@/components/ui/data-table";
import { productColumns } from "./sessions/table/product.column";

export const metadata: Metadata = {
  title: "Produtos - Painel Admin",
};

const ProductPage = async () => {
  const categories = await GetCategory();
  const products = await GetProduct();

  return (
    <>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Produtos</h1>
          <p className="text-sm text-zinc-400">Gerencie seus produtos</p>
        </div>
        <CreateProductButton categories={categories} />
      </section>
      <DataTable data={products} columns={productColumns} />
    </>
  );
};

export default ProductPage;
