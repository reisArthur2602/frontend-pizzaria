import HeaderDashboard from "@/components/header/header-dashboard";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="flex h-full flex-col">
      <HeaderDashboard />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
