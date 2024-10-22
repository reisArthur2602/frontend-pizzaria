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
import { DeleteOrder } from "../../../services/order/delete-order";
import { Trash } from "lucide-react";

interface IDeleteOrderInDraftButtonButton {
  id: string;
}

const DeleteOrderInDraftButtonButton = ({
  id,
}: IDeleteOrderInDraftButtonButton) => {
  const handleDeleteOrder = async (id: string) => {
    const response = await DeleteOrder({ id });
    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      toast.success(response.body);
    } else {
      toast.error("Erro ao deletar pedido, tente novamente mais tarde");
    }
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
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o
            pedido de nossos servidores.
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

export default DeleteOrderInDraftButtonButton;
