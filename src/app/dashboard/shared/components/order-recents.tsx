import { BellIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface IOrderRecents {
  count: number;
}
export const OrderRecents = ({ count }: IOrderRecents) => {
  return (
    <div className="relative">
      <Link href={"/dashboard"}>
        <BellIcon size={28} />
      </Link>

      {count > 0 && (
        <span className="absolute -right-2 -top-3 flex size-6 items-center justify-center rounded-full bg-white text-xs font-medium text-primary">
          {count}
        </span>
      )}
    </div>
  );
};
