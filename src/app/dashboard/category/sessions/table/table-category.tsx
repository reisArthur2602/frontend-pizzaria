import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryResponse } from "@/types/Category";
import { format } from "date-fns";
import DeleteCategoryButton from "./delete-category-button";
import ViewCategoryButton from "./view-category-button";

type Props = {
  categories: CategoryResponse[] | [];
};

const TableCategory = ({ categories }: Props) => {
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
            <TableCell className="capitalize">{category.name}</TableCell>
            <TableCell>{format(category.created_at, "dd/MM/yyyy")}</TableCell>
            <TableCell>
              <div className="flex items-center gap-3">
                <DeleteCategoryButton id={category.id} />
                <ViewCategoryButton category={category} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCategory;
