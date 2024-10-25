"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { OrderRequest } from "@/types/Order";
import { registerOrderSchema } from "@/lib/zod/Order";
import { CreateOrder } from "@/services/order/create-order";

const CreateOrderButton = () => {
  const form = useForm<OrderRequest>({
    resolver: zodResolver(registerOrderSchema),
  });

  const router = useRouter();

  const handleCreateOrder = form.handleSubmit(async (credentials) => {
    const response = await CreateOrder(credentials);

    if (!response?.sucess) {
      return toast.error(response?.body);
    }

    router.replace(`/dashboard/order/${response.body}`);
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Novo pedido</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Novo pedido</DialogTitle>
          <DialogDescription>
            Prencha o formulário para abrir um pedido
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleCreateOrder}>
          <div className="mb-4 flex items-center gap-3 text-right">
            <Label htmlFor="name">Mesa</Label>
            <Input
              id="name"
              {...form.register("table")}
              placeholder="Número da mesa ex:. 1"
              autoFocus
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" type="button">
                Cancelar
              </Button>
            </DialogClose>
            <Button>Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderButton;
