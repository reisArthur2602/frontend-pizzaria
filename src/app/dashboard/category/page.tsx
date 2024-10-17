import React from "react";
import DialogCreateCategory from "../shared/components/dialog-create-category";
import TableCategory from "../shared/components/table-category";

const Category = () => {
  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Categorias</h1>
          <p className="text-sm text-zinc-400">Gerencie suas categorias</p>
        </div>
        <DialogCreateCategory />
      </section>

      <TableCategory />
    </div>
  );
};

export default Category;
