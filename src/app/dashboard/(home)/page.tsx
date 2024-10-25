import CreateOrderButton from "../order/(order)/sessions/create-order-button";

import CardOrder from "../order/(order)/sessions/card/card-order";
import { GetOrderInProductionCurrent } from "@/services/order/get-order-in-production-current";

const DashboardPage = async () => {
  const currentOrders = await GetOrderInProductionCurrent();

  return (
    <div>
      <section className="mb-9 flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Últimos Pedidos</h1>
          <p className="text-sm text-zinc-400">
            Visualize todos os pedidos para a data atual
          </p>
        </div>
        <CreateOrderButton />
      </section>

      <section className="grid grid-cols-5 gap-6">
        {currentOrders.map((order) => (
          <CardOrder order={order} key={order.id} />
        ))}
      </section>
    </div>
  );
};

export default DashboardPage;
