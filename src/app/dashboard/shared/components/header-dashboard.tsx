"use client";

import Link from "next/link";
import { LINKS_HEADER_DASHBOARD } from "../contants/links";
import { OrderRecents } from "./order-recents";

const HeaderDashboard = () => {
  return (
    <header className="bg-primary shadow-sm">
      <nav className="flex h-16 items-center justify-between px-8 text-white">
        <Link href={"/dashboard"} className="text-xl font-bold text-white">
          Painel Administrativo
        </Link>

        <div className="flex items-center gap-6">
          {LINKS_HEADER_DASHBOARD.map((link) => (
            <Link href={link.path} key={link.label}>
              {link.label}
            </Link>
          ))}

          <OrderRecents count={1} />
        </div>
      </nav>
    </header>
  );
};

export default HeaderDashboard;
