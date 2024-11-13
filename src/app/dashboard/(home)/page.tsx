import { GetOrderInProductionCurrent } from "@/services/order/get-order-in-production-current";
import OrderSwitch from "./sessions/order-switch/order-switch";
import ListCardOrder from "./sessions/list-card-order/list-card-order";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Últimos Pedidos - Painel Admin",
};

const DashboardPage = async () => {
  const currentOrders = await GetOrderInProductionCurrent();

  return (
    <>
      <section className="mb-9 flex justify-between print:hidden">
        <div>
          <h1 className="text-xl font-bold">Últimos Pedidos</h1>
          <p className="text-sm text-zinc-400">
            Visualize todos os pedidos para a data atual
          </p>
        </div>
        <OrderSwitch />
      </section>

      <ListCardOrder orders={currentOrders} />
    </>
  );
};

export default DashboardPage;
