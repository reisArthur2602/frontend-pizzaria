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

import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Trash } from "lucide-react";
import { DeleteOrder } from "@/services/order/delete-order";

type Props = {
  id: string;
};

const DeleteOrderCartButton = ({ id }: Props) => {
  const handleDeleteOrder = async (id: string) => {
    const response = await DeleteOrder(id);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }
    toast.success(response.body);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} className="flex items-center gap-3">
          <Trash size={20} />
          <>Deletar Pedido</>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Deseja excluir rascunho do pedido?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o
            rascunho do pedido de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDeleteOrder(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteOrderCartButton;
