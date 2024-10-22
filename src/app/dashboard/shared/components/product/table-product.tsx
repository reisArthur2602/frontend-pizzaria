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
import RemoveProductTable from "./remove-product-table";
import Image from "next/image";
import DialogViewProduct from "./dialog-view-product";

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
          <TableHead>Imagem</TableHead>
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
            <TableCell>
              <div className="relative h-20 w-32">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/files/${product.image_url}`}
                  fill
                  alt={product.name}
                  className="object-cover"
                />
              </div>
            </TableCell>
            <TableCell className="capitalize">{product.name}</TableCell>
            <TableCell>{formatPrice(product.price)}</TableCell>
            <TableCell className="capitalize">
              <Badge>{product.category.name}</Badge>
            </TableCell>
            <TableCell>{formatDate(product.created_at)}</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <RemoveProductTable id={product.id} />
                <DialogViewProduct product={product} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
