import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

type Props = { count: number };

export const CartOrderButton = ({ count }: Props) => {
  return (
    <Button size={"icon"} variant={"secondary"} className="relative">
      <ShoppingBag />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-zinc-50">
          {count}
        </span>
      )}
    </Button>
  );
};
