"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CategoryResponse } from "@/types/Category";
import ProductCard from "./card/product-card";
import SearchProduct from "./search-product";

type Props = {
  categories: CategoryResponse[] | [];
  order_id: string;
};

const Products = ({ categories, order_id }: Props) => {
  const [category, setCategory] = useState<CategoryResponse>(categories[0]);

  const products = categories.flatMap((category) => category.Product);

  const handleChangeCategory = (category: CategoryResponse) => {
    setSearchedProducts([]);
    setCategory(category);
  };

  const [searchedProducts, setSearchedProducts] = useState<
    CategoryResponse["Product"] | []
  >([]);

  return (
    <>
      <SearchProduct
        products={products}
        setSearchedProducts={setSearchedProducts}
      />

      <div className="flex w-full gap-4 overflow-x-auto pb-3">
        {categories.map((item) => (
          <Button
            key={item.id}
            variant={
              category.name === item.name && searchedProducts.length === 0
                ? "default"
                : "secondary"
            }
            size={"lg"}
            onClick={() => handleChangeCategory(item)}
            className="capitalize"
          >
            {item.name}
          </Button>
        ))}
      </div>

      {searchedProducts && searchedProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {searchedProducts.map((product) => (
            <ProductCard
              product={product}
              order_id={order_id}
              key={product.id}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {category.Product.map((product) => (
              <ProductCard
                product={product}
                order_id={order_id}
                key={product.id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
