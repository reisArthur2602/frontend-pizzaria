import React, { ReactNode } from "react";
import HeaderDashboard from "./shared/components/header-dashboard";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout = ({ children }: IDashboardLayout) => {
  return (
    <div className="flex h-full flex-col">
      <HeaderDashboard />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
