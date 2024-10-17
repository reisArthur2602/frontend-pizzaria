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

const TableCategory = () => {
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
        <TableRow>
          <TableCell>3bb4ebdd-d1a4-42f0-8aa2-c616444932e4</TableCell>
          <TableCell>pizza</TableCell>
          <TableCell>2024-10-11</TableCell>
          <TableCell>
            <button>
              <Ellipsis />
            </button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCategory;
