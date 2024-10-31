"use client";

import { Button } from "@/components/ui/button";
import { OrderResponse } from "@/types/Order";

import { Printer } from "lucide-react";

type Props = {
  order: OrderResponse;
  // eslint-disable-next-line no-unused-vars
  onPrint: (order: OrderResponse) => void;
};

const PrintOrderCardButton = ({ onPrint, order }: Props) => {
  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      className="bg-orange-600 text-white hover:bg-orange-700"
      onClick={() => onPrint(order)}
    >
      <Printer />
    </Button>
  );
};

export default PrintOrderCardButton;
