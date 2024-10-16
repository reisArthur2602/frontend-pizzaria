import Image from "next/image";
import React, { ReactNode } from "react";

interface IDashboardLayout {
  children: ReactNode;
}
const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <main className="flex h-full">
      <section className="flex flex-1 items-center justify-center">
        {children}
      </section>
      <div className="relative flex-1">
        <Image
          src={"/banner-hero.jpg"}
          alt="banner sistema pizzaria"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
};

export default DashboardLayout;
