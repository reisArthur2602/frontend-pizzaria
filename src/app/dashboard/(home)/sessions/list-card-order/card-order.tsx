import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Badge } from "@/components/ui/badge";

import { OrderResponse } from "@/types/Order";
import { formatPrice } from "@/utils/format-price";
import { calculateTotalItemsOrder } from "@/utils/calculate-total-items-order";
import DeleteOrderCardButton from "./delete-order-card-button";
import FinishOrderCardButton from "./finish-order-card-button";
import CardItem from "@/app/dashboard/components/card-item";
import PrintOrderCardButton from "./print-order-card-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  order: OrderResponse;
  // eslint-disable-next-line no-unused-vars
  onPrint: (order: OrderResponse) => void;
};

const CardOrder = ({ order, onPrint }: Props) => {
  const formatedCurrentDate = format(
    new Date(order.created_at),
    "dd/MM/yyyy, HH:mm",
    {
      locale: ptBR,
    },
  );

  const formatedPrice = formatPrice(calculateTotalItemsOrder(order));
  const orderStatusIsDraft = order.status === "DRAFT";
  return (
    <Card className="w-full max-w-[22.5rem] overflow-hidden print:hidden">
      <CardHeader
        className={`${orderStatusIsDraft ? "bg-primary/50" : "bg-primary"} text-xl font-medium text-white`}
      >
        <CardTitle className="flex items-center justify-between gap-4 font-bold">
          <>{`M-${order.table}`}</>

          <div className="flex items-center gap-3">
            <DeleteOrderCardButton id={order.id} />

            {!orderStatusIsDraft ? (
              <>
                <FinishOrderCardButton id={order.id} />
                <PrintOrderCardButton onPrint={onPrint} order={order} />
              </>
            ) : (
              <Button
                variant={"secondary"}
                size={"icon"}
                className="bg-orange-600 text-white hover:bg-orange-700"
                asChild
              >
                <Link href={`/dashboard/order/${order.id}`}>
                  <ArrowRight />
                </Link>
              </Button>
            )}
          </div>
        </CardTitle>

        <CardDescription className="text-white">
          {formatedCurrentDate}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4">
        <div className="scrollbar-hidden flex h-80 w-full flex-col overflow-y-auto">
          {order.Item.map((item) => (
            <CardItem
              key={item.id}
              image_url={item.product.image_url}
              price={item.product.price}
              quantity={item.quantity}
              product_name={item.product.name}
            />
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-4">
        Total:<Badge>{formatedPrice}</Badge>
      </CardFooter>
    </Card>
  );
};

export default CardOrder;
