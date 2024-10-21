import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { File } from "lucide-react";
import React from "react";

import { formatDate } from "../../utils/format-date";
import { formatPrice } from "../../utils/format-price";
import { Badge } from "@/components/ui/badge";

import { calculateTotalItemsOrder } from "../../utils/calculate-total-items-order";
import CardItem from "../card-item";
import { IGetOrders } from "../../services/order/get-order-completed";

interface IDialogViewOrder {
  order: IGetOrders;
}

const DialogViewOrder = ({ order }: IDialogViewOrder) => {
  return (
    <Dialog>
      <DialogTrigger>
        <File size={20} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes do Pedido</DialogTitle>
          <DialogDescription>
            Visualize todos os detalhes do pedido
          </DialogDescription>
        </DialogHeader>

        <section className="flex flex-col text-sm">
          <div className="flex items-center justify-between border-b py-4">
            <b>Id:</b>
            <p className="text-zinc-500">{order.id}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Mesa:</b>
            <p className="capitalize text-zinc-500">{order.table}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Cadastro:</b>
            <p className="capitalize text-zinc-500">
              {formatDate(order.created_at)}
            </p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Total:</b>
            <Badge>{formatPrice(calculateTotalItemsOrder(order))}</Badge>
          </div>

          <div className="flex flex-col py-4">
            <b>Items do pedido:</b>

            <div className="flex h-full max-h-80 w-full flex-col overflow-y-scroll pr-2">
              {order.Item.map((item) => (
                <CardItem
                  key={item.id}
                  image_url={item.product.image_url}
                  price={item.product.price}
                  quantity={item.quantity}
                  product_name={item.product.name}
                />
              ))}
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default DialogViewOrder;
