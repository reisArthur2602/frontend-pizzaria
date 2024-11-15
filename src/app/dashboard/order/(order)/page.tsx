import { Button } from "@/components/ui/button";

import { GetOrder } from "@/services/order/get-order";
import { Metadata } from "next";
import { DataTable } from "@/components/ui/data-table";
import { orderColumns } from "./sessions/table/order.column";

export const metadata: Metadata = {
  title: "Histórico de vendas - Painel Admin",
};

const OrderPage = async () => {
  const orders = await GetOrder();

  return (
    <>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Histórico de vendas</h1>
          <p className="text-sm text-zinc-400">
            Visualize o seu histórico de vendas
          </p>
        </div>
        <Button variant={"ghost"}>Exportar Relatório</Button>
      </section>
      <DataTable data={orders} columns={orderColumns} />
    </>
  );
};

export default OrderPage;
