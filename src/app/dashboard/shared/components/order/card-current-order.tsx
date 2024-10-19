import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGetOrderCurrent } from "../../services/order/get-order-current";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { calculateTotalItemsOrder } from "../../utils/calculate-total-items-order";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "../../utils/format-price";
import CardItem from "../card-item";
import RemoveOrderButton from "./remove-order-button";

import FinishOrderButton from "./finish-order-button";

interface ICardCurrentOrder {
  order: IGetOrderCurrent;
}

const CardCurrentOrder = ({ order }: ICardCurrentOrder) => {
  const formatedCurrentDate = format(
    new Date(order.created_at),
    "dd/MM/yyyy, HH:mm",
    {
      locale: ptBR,
    },
  );

  const formatedPrice = formatPrice(calculateTotalItemsOrder(order));

  return (
    <Card className="w-full max-w-[400px] overflow-hidden">
      <CardHeader className="bg-primary text-xl font-medium text-white">
        <CardTitle className="flex items-center justify-between gap-4 font-bold">
          {`M-${order.table}`}

          <div className="flex items-center gap-3">
            <RemoveOrderButton id={order.id} />
            <FinishOrderButton id={order.id} />
            <Button
              variant={"secondary"}
              size={"icon"}
              className="bg-orange-600 text-white hover:bg-orange-700"
            >
              <Printer />
            </Button>
          </div>
        </CardTitle>

        <CardDescription className="text-white">
          {formatedCurrentDate}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex h-full max-h-80 w-full flex-col overflow-y-scroll">
        {order.Item.map((item) => (
          <CardItem
            key={item.id}
            image_url={item.product.image_url}
            price={item.product.price}
            quantity={item.quantity}
            product_name={item.product.name}
          />
        ))}
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-4">
        Total:<Badge variant={"secondary"}>{formatedPrice}</Badge>
      </CardFooter>
    </Card>
  );
};

export default CardCurrentOrder;
