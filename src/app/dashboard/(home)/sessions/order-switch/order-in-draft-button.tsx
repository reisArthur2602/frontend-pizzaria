import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  id: string;
};

const OrderInDraftButton = ({ id }: Props) => {
  return (
    <Button variant={"ghost"} asChild>
      <Link href={`/dashboard/order/${id}`}>Finalizar Rascunho</Link>
    </Button>
  );
};

export default OrderInDraftButton;
