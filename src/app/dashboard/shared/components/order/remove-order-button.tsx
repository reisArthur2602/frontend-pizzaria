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
import { X } from "lucide-react";

import React from "react";
import { toast } from "sonner";

import { DeleteOrder } from "../../services/order/delete-order";
import { Button } from "@/components/ui/button";

interface IRemoveOrderButton {
  id: string;
}

const RemoveOrderButton = ({ id }: IRemoveOrderButton) => {
  const handleDeleteOrder = async (id: string) => {
    const response = await DeleteOrder({ id });
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
      <AlertDialogTrigger asChild>
        <Button
          variant={"secondary"}
          size={"icon"}
          className="bg-orange-600 text-white hover:bg-orange-700"
        >
          <X />
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

export default RemoveOrderButton;
