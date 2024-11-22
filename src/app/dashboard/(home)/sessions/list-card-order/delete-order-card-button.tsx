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

import { Button } from "@/components/ui/button";
import { DeleteOrder } from "@/services/order/delete-order";

type Props = {
  id: string;
};

const DeleteOrderCardButton = ({ id }: Props) => {
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
          <AlertDialogTitle>Deseja excluir o pedido?</AlertDialogTitle>
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

export default DeleteOrderCardButton;
