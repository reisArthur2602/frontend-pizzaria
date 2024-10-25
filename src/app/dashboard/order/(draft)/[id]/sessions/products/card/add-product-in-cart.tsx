"use client";

import { Button } from "@/components/ui/button";
import { CreateItem } from "@/services/item/create-item";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import React, { useState } from "react";

import { toast } from "sonner";

interface IAddItemOrder {
  product_id: string;
  order_id: string;
}

const AddProductInCart = ({ order_id, product_id }: IAddItemOrder) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddProductCard = async () => {
    const response = await CreateItem({ order_id, product_id, quantity });

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    toast.success(response.body);
  };

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

      <Button
        className="flex items-center gap-4"
        onClick={handleAddProductCard}
      >
        <>Adicionar ao pedido</>
        <ShoppingBag />
      </Button>
    </div>
  );
};

export default AddProductInCart;
