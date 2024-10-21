"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

interface IAddItemOrder {
  product_id: string;
  order_id: string;
}

const AddItemOrder = ({}: IAddItemOrder) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4 text-base font-semibold">
        <Button size={"icon"} onClick={() => setQuantity(quantity + 1)}>
          <Plus size={16} />
        </Button>
        <div>{quantity}</div>
        <Button
          size={"icon"}
          variant={"secondary"}
          onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}
        >
          <Minus size={16} />
        </Button>
      </div>

      <Button className="flex items-center gap-4">
        <>Adicionar ao pedido</>
        <ShoppingBag />
      </Button>
    </div>
  );
};

export default AddItemOrder;
