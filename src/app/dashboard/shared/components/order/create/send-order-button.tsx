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
import { SendOrder } from "../../../services/order/send-order";
import { useRouter } from "next/navigation";

interface ISendOrderButton {
  id: string;
}

const SendOrderButton = ({ id }: ISendOrderButton) => {
  const router = useRouter();

  const handleSendOrder = async (id: string) => {
    const response = await SendOrder({ id });

    if (response) {
      if (!response.sucess) {
        return toast.error(response.body);
      }
      router.replace("/dashboard");
      toast.success(response.body);
    } else {
      toast.error("Erro ao enviar pedido, tente novamente mais tarde");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"lg"}>Confirmar Pedido</Button>
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
          <AlertDialogAction onClick={() => handleSendOrder(id)}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SendOrderButton;
