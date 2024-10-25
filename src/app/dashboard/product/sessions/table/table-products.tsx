import { formatPrice } from "@/utils/format-price";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductResponse } from "@/types/Product";
import { format } from "date-fns";
import Image from "next/image";
import DeleteProductButton from "./delete-product-button";
import ViewProductButton from "./view-product-button";

type Props = {
  products: ProductResponse[] | [];
};

const TableProduct = ({ products }: Props) => {
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
            <TableCell>{format(product.created_at, "dd/MM/yyyy")}</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <DeleteProductButton id={product.id} />
                <ViewProductButton product={product} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
