import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { formatDate } from "../../utils/format-date";

import { formatPrice } from "../../utils/format-price";
import { calculateTotalItemsOrder } from "../../utils/calculate-total-items-order";
import RemoveOrderTable from "./remove-order-table";
import DialogViewOrder from "./dialog-view-order";
import { IGetOrders } from "../../services/order/get-order-completed";
import { Badge } from "@/components/ui/badge";

interface ITableOrder {
  orders: IGetOrders[] | [];
}

const TableOrder = ({ orders }: ITableOrder) => {
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
            <TableCell>{formatDate(order.created_at)}</TableCell>
            <TableCell>
              {formatPrice(calculateTotalItemsOrder(order))}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <RemoveOrderTable id={order.id} />
                <DialogViewOrder order={order} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
