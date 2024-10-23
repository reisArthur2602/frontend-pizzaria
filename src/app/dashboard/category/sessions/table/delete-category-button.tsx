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
import { DeleteCategory } from "@/services/category/delete-category";
import { Trash2 } from "lucide-react";

import React from "react";

import { toast } from "sonner";

type Props = {
  id: string;
};

const DeleteCategoryButton = ({ id }: Props) => {
  const handleDeleteCategory = async (id: string) => {
    const response = await DeleteCategory(id);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    toast.success(response.body);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2 size={20} />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja Excluir Categoria?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente a
            categoria e todos os produtos associados a ela de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteCategory(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCategoryButton;
