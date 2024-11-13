import { GetCategory } from "@/services/category/get-category";
import CreateCategoryButton from "./sessions/create-category-button";
import { Metadata } from "next";
import { DataTable } from "@/components/ui/data-table";
import { categoryColumns } from "./sessions/table/category.columns";

export const metadata: Metadata = {
  title: "Categorias - Painel Admin",
};

const CategoryPage = async () => {
  const categories = await GetCategory();

  return (
    <>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Categorias</h1>
          <p className="text-sm text-zinc-400">Gerencie suas categorias</p>
        </div>
        <CreateCategoryButton />
      </section>

      <DataTable columns={categoryColumns} data={categories} />
    </>
  );
};

export default CategoryPage;
