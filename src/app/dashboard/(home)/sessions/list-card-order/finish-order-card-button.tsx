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
import { UpdateStatusOrder } from "@/services/order/update-status-order";

type Props = {
  id: string;
};

const FinishOrderCardButton = ({ id }: Props) => {
  const handleFinishOrder = async (id: string) => {
    const response = await UpdateStatusOrder(id, "COMPLETED");

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
          <Check />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja finalizar o pedido?</AlertDialogTitle>
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

export default FinishOrderCardButton;
