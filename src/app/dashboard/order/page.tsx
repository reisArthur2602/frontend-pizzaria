import { Button } from "@/components/ui/button";
import React from "react";
import TableOrder from "../shared/components/order/table-order";
import { GetOrders } from "../shared/services/order/get-order-completed";

const Order = async () => {
  const orders = await GetOrders();

  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Histórico de vendas</h1>
          <p className="text-sm text-zinc-400">
            Visualize o seu histórico de vendas
          </p>
        </div>
        <Button variant={"ghost"}>Exportar Relatório</Button>
      </section>
      <TableOrder orders={orders} />
    </div>
  );
};

export default Order;
