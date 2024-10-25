import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { OrderResponse } from "@/types/Order";
import { format } from "date-fns";
import { formatPrice } from "@/utils/format-price";
import { calculateTotalItemsOrder } from "@/utils/calculate-total-items-order";
import DeleteOrderButton from "./delete-order-button";
import ViewOrderButton from "./view-order-button";

type Props = {
  orders: OrderResponse[] | [];
};

const TableOrder = ({ orders }: Props) => {
  return (
    <Table>
      <TableCaption>Vendas cadastradas no sistema</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Mesa</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Cadastro</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.table}</TableCell>
            <TableCell>
              {order.status ? (
                <Badge>Finalizado</Badge>
              ) : (
                <Badge variant={"secondary"}>Em preparo</Badge>
              )}
            </TableCell>
            <TableCell>{format(order.created_at, "dd/MM/yyyy")}</TableCell>
            <TableCell>
              {formatPrice(calculateTotalItemsOrder(order))}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <DeleteOrderButton id={order.id} />
                <ViewOrderButton order={order} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
