import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { IGetCategoryResponse } from "../services/get-category";

interface ITableCategory {
  categories: IGetCategoryResponse[] | [];
}

const TableCategory = ({ categories }: ITableCategory) => {
  return (
    <Table>
      <TableCaption>Categorias cadastradas no sistema</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Cadastrado</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {categories.map((category) => (
          <>
            <TableRow key={category.id}>
              <TableCell>{category.id}</TableCell>
              <TableCell>{category.name}</TableCell>
              <TableCell>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(category.created_at),
                )}
              </TableCell>
              <TableCell>
                <button>
                  <Ellipsis />
                </button>
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCategory;
