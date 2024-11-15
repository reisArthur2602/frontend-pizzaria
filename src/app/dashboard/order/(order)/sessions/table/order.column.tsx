"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import DeleteOrderButton from "./delete-order-button";
import ViewOrderButton from "./view-order-button";
import { OrderResponse } from "@/types/Order";
import { calculateTotalItemsOrder } from "@/utils/calculate-total-items-order";
import { formatPrice } from "@/utils/format-price";

export const orderColumns: ColumnDef<OrderResponse>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "table",
    header: "Mesa",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original: order } }) =>
      order.status ? (
        <Badge>Finalizado</Badge>
      ) : (
        <Badge variant={"secondary"}>Em preparo</Badge>
      ),
  },

  {
    accessorKey: "created_at",
    header: "Cadastro",
    cell: ({ row: { original: order } }) =>
      format(order.created_at, "dd/MM/yyyy"),
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row: { original: order } }) =>
      formatPrice(calculateTotalItemsOrder(order)),
  },

  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: order } }) => (
      <div className="flex items-center gap-3">
        <DeleteOrderButton id={order.id} />
        <ViewOrderButton order={order} />
      </div>
    ),
  },
];
