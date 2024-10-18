"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";

import React from "react";
import { toast } from "sonner";
import { DeleteProduct } from "../../services/product/delete-product";

interface IRemoveProductTable {
  id: string;
}

const RemoveProductTable = ({ id }: IRemoveProductTable) => {
  const handleDeleteProduct = async (id: string) => {
    const response = await DeleteProduct({ id });
    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      toast.success(response.body);
    } else {
      toast.error("Erro ao deletar categoria, tente novamente mais tarde");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2 size={20} />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o
            produto de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteProduct(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RemoveProductTable;
