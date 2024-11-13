"use client";

import { CategoryResponse } from "@/types/Category";
import { ColumnDef } from "@tanstack/react-table";
import ViewCategoryButton from "./view-category-button";
import DeleteCategoryButton from "./delete-category-button";
import { format } from "date-fns";

export const categoryColumns: ColumnDef<CategoryResponse>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "created_at",
    header: "Cadastro",
    cell: ({ row: { original: category } }) =>
      format(category.created_at, "dd/MM/yyyy"),
  },

  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: category } }) => (
      <div className="flex items-center gap-3">
        <DeleteCategoryButton id={category.id} />
        <ViewCategoryButton category={category} />
      </div>
    ),
  },
];
