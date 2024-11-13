import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

import { File } from "lucide-react";

import { format } from "date-fns";

import { CategoryResponse } from "@/types/Category";

import CardItem from "@/components/card-item";
import { Button } from "@/components/ui/button";

type Props = {
  category: CategoryResponse;
};

const ViewCategoryButton = ({ category }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <File size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Detalhes da categoria</DialogTitle>
          <DialogDescription>
            Visualize todos os detalhes da categoria
          </DialogDescription>
        </DialogHeader>

        <section className="flex flex-col text-sm">
          <div className="flex items-center justify-between border-b py-4">
            <b>Id:</b>
            <p className="text-zinc-500">{category.id}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Nome:</b>
            <p className="capitalize text-zinc-500">{category.name}</p>
          </div>

          <div className="flex items-center justify-between border-b py-4">
            <b>Cadastro:</b>
            <p className="capitalize text-zinc-500">
              {format(category.created_at, "dd/MM/yyyy")}
            </p>
          </div>

          <div className="flex flex-col gap-4 py-4">
            <b>Produtos associados:</b>

            <div className="scrollbar-hidden flex h-full max-h-80 w-full flex-col overflow-auto">
              {category.Product.map((product) => (
                <CardItem
                  key={product.id}
                  image_url={product.image_url}
                  price={product.price}
                  product_name={product.name}
                />
              ))}
            </div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default ViewCategoryButton;
