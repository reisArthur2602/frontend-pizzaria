"use client";

import { useState } from "react";
import { IGetCategoryResponse } from "../../../services/category/get-category";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";

interface IProductsList {
  categories: IGetCategoryResponse[] | [];
  order_id: string;
}

const ProductsList = ({ categories, order_id }: IProductsList) => {
  const [category, setCategory] = useState<IGetCategoryResponse>(categories[0]);

  return (
    <>
      <div className="flex w-full gap-4 overflow-x-auto pb-3">
        {categories.map((item) => (
          <Button
            key={item.id}
            variant={category.name === item.name ? "default" : "ghost"}
            size={"lg"}
            onClick={() => setCategory(item)}
            className="capitalize"
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        {category.Product.map((product) => (
          <ProductCard product={product} order_id={order_id} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
