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
import { IGetProductResponse } from "../../services/product/get-product";
import { formatPrice } from "../../utils/format-price";
import { Badge } from "@/components/ui/badge";

interface ITableProduct {
  products: IGetProductResponse[] | [];
}

const TableProduct = ({ products }: ITableProduct) => {
  return (
    <Table>
      <TableCaption>Produtos cadastrados no sistema</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Cadastrado</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="capitalize">{product.id}</TableCell>
            <TableCell className="capitalize">{product.name}</TableCell>
            <TableCell>{formatPrice(product.price)}</TableCell>
            <TableCell className="capitalize">
              <Badge>{product.category.name}</Badge>
            </TableCell>
            <TableCell>{formatDate(product.created_at)}</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
