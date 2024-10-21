import React from "react";

import CardCurrentOrder from "../shared/components/order/card-current-order";
import { GetOrderCurrent } from "../shared/services/order/get-order-current";
import DialogCreateOrder from "../shared/components/order/dialog-create-order";

const Dashboard = async () => {
  const currentOrders = await GetOrderCurrent();

  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Últimos Pedidos</h1>
          <p className="text-sm text-zinc-400">
            Visualize todos os pedidos para a data atual
          </p>
        </div>
        <DialogCreateOrder />
      </section>

      <section className="grid grid-cols-5 gap-6">
        {currentOrders.map((order) => (
          <CardCurrentOrder order={order} key={order.id} />
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
