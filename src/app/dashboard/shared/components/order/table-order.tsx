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
import { IGetOrderCompleted } from "../../services/order/get-order-completed";
import { formatPrice } from "../../utils/format-price";
import { calculateTotalItemsOrder } from "../../utils/calculate-total-items-order";

interface ITableOrder {
  orders: IGetOrderCompleted[] | [];
}

const TableOrder = ({ orders }: ITableOrder) => {
  return (
    <Table>
      <TableCaption>Vendas cadastradas no sistema</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Mesa</TableHead>
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
            <TableCell>{formatDate(order.created_at)}</TableCell>
            <TableCell>
              {formatPrice(calculateTotalItemsOrder(order))}
            </TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableOrder;
