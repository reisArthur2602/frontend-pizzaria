"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CategoryResponse } from "@/types/Category";
import ProductCard from "./card/product-card";

type Props = {
  categories: CategoryResponse[] | [];
  order_id: string;
};

const ProductsList = ({ categories, order_id }: Props) => {
  const [category, setCategory] = useState<CategoryResponse>(categories[0]);

  return (
    <>
      <div className="flex w-full gap-4 overflow-x-auto pb-3">
        {categories.map((item) => (
          <Button
            key={item.id}
            variant={category.name === item.name ? "default" : "secondary"}
            size={"lg"}
            onClick={() => setCategory(item)}
            className="capitalize"
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {category.Product.map((product) => (
          <ProductCard product={product} order_id={order_id} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
