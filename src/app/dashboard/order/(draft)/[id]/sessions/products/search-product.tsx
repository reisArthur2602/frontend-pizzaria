"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CategoryResponse } from "@/types/Category";

import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  products: CategoryResponse["Product"];

  setSearchedProducts: (
    // eslint-disable-next-line no-unused-vars
    searchedProducts: CategoryResponse["Product"] | [],
  ) => void;
};

const SearchProduct = ({ products, setSearchedProducts }: Props) => {
  const [search, setSearch] = useState("");

  const handleSearchProduct = () => {
    if (search === "") return setSearchedProducts([]);

    const results = products.filter((product) =>
      product.name.toLocaleLowerCase().includes(search),
    );

    setSearchedProducts(results);
  };

  return (
    <div className="flex w-full max-w-[26.25rem] items-center gap-2">
      <Input
        placeholder="Buscar por produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button onClick={handleSearchProduct}>
        <Search size={20} />
      </Button>
    </div>
  );
};

export default SearchProduct;
