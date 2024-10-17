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

const DialogCreateCategory = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>Nova Categoria</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Categoria</DialogTitle>
          <DialogDescription>
            Prencha o formulário para cadastrar uma categoria
          </DialogDescription>
        </DialogHeader>

        <form>
          <div className="flex items-center gap-3 text-right">
            <Label htmlFor="name">Nome</Label>
            <Input placeholder="Nome da categoria" autoFocus id="name" />
          </div>
        </form>

        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>

          <Button>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreateCategory;
