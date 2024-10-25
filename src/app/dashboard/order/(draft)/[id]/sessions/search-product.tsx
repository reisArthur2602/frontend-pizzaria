"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchProduct = () => {
  return (
    <form className="flex w-full max-w-[26.25rem] items-center gap-2">
      <Input placeholder="Buscar por produto..." />
      <Button>
        <Search size={20} />
      </Button>
    </form>
  );
};

export default SearchProduct;
