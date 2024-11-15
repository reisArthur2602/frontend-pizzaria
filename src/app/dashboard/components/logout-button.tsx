"use client";

import { LogoutUser } from "@/services/user/logout-user";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  return (
    <>
      <button onClick={() => LogoutUser()} className="flex items-center gap-2">
        <>Sair</>
        <LogOut size={20} />
      </button>
    </>
  );
};

export default LogoutButton;
