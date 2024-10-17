import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IGetCategoryResponse } from "../../services/get-category";

import { formatDate } from "../../utils/format-date";
import RemoveCategoryTable from "./remove-category-table";

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
          <TableRow key={category.id}>
            <TableCell>{category.id}</TableCell>
            <TableCell>{category.name}</TableCell>
            <TableCell>{formatDate(category.created_at)}</TableCell>
            <TableCell>
              <RemoveCategoryTable id={category.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCategory;
