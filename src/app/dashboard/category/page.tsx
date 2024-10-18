import React from "react";
import DialogCreateCategory from "../shared/components/category/dialog-create-category";
import TableCategory from "../shared/components/category/table-category";
import { GetCategory } from "../shared/services/category/get-category";

const Category = async () => {
  const categories = await GetCategory();

  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Categorias</h1>
          <p className="text-sm text-zinc-400">Gerencie suas categorias</p>
        </div>
        <DialogCreateCategory />
      </section>

      <TableCategory categories={categories} />
    </div>
  );
};

export default Category;
