import Link from "next/link";
import React from "react";

export const CategoryButton = () => {
  return (
    <>
      <Link href={"/"}>
        <button className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-2 w-[200px] text-white ">
          Ver todos os produtos
        </button>
      </Link>
    </>
  );
};
