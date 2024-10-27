import CardOrder from "./sessions/card/card-order";

import { GetOrderInProductionCurrent } from "@/services/order/get-order-in-production-current";
import OrderSwitch from "./sessions/order-switch/order-switch";

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
        <OrderSwitch />
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
