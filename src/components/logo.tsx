import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="relative h-32 w-48">
      <Image src={"/logo.svg"} alt="Logo pizzaria" fill quality={100} />
    </div>
  );
};

export default Logo;
