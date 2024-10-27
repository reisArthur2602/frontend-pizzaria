import { cookies } from "next/headers";
import React from "react";
import OrderInDraftButton from "./order-in-draft-button";
import CreateOrderButton from "./create-order-button";

const OrderSwitch = () => {
  const orderCookie = cookies().get("order-in-draft")?.value;

  return orderCookie ? (
    <OrderInDraftButton id={orderCookie} />
  ) : (
    <CreateOrderButton />
  );
};

export default OrderSwitch;
