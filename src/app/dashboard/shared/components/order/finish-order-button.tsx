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
import { Check } from "lucide-react";

import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { FinishOrder } from "../../services/order/finish-order";

interface IFinishOrderButton {
  id: string;
}

const FinishOrderButton = ({ id }: IFinishOrderButton) => {
  const handleFinishOrder = async (id: string) => {
    const response = await FinishOrder({ id });

    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      toast.success(response.body);
    } else {
      toast.error("Erro ao finalizar pedido, tente novamente mais tarde");
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
          <Check />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso irá atualizar permanentemente
            o status do pedido em nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleFinishOrder(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FinishOrderButton;
