import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative h-28 w-40">
      <Image src={"/Logo.svg"} alt="Logo pizzaria" fill quality={100} />
    </div>
  );
};

export default Logo;
