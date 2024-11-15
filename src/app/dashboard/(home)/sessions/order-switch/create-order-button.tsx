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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { OrderRequest } from "@/types/Order";
import { registerOrderSchema } from "@/lib/zod/Order";
import { CreateOrder } from "@/services/order/create-order";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { TableInput } from "@/app/dashboard/components/table-input";

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

        <Form {...form}>
          <form onSubmit={handleCreateOrder} className="space-y-6">
            <FormField
              control={form.control}
              name="table"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TableInput
                      placeholder="Digite o número da mesa"
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button
                  variant="secondary"
                  type="button"
                  disabled={form.formState.isSubmitting}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button disabled={form.formState.isSubmitting}>Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderButton;
