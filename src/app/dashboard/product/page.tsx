import { Metadata } from "next";
import CreateProductButton from "./sessions/create-product-button";
import TableProduct from "./sessions/table/table-products";
import { GetCategory } from "@/services/category/get-category";
import { GetProduct } from "@/services/product/get-product";

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
      <TableProduct products={products} />
    </>
  );
};

export default ProductPage;
