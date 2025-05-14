import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuHeader } from "./menuHeader";
import { AuthButton } from "./authButton";
import { CartButton } from "./cartButton";

export const Header = () => {
  return (
    <>
      <header className="w-full w-max-[1820px] px-6 flex items-start gap-4 justify-center h-[150px] border-b-[#E1E4E7] border-b-2 flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-4">
            <Link href={"/"}>
              <Image
                src="/Captura de tela 2024-10-08 193557.png"
                className="h-[48px] w-[92px] rounded-full"
                width={128}
                height={128}
                alt="Logo do Ecommerce Zi-shop"
              />
            </Link>
            <input
              type="search"
              placeholder="Pesquisar"
              className="bg-[#E1E4E7] w-[620px] h-[28px] p-4 rounded"
            />
          </div>
          <div className="flex items-center gap-4">
            <AuthButton />
            <div className="w-[2px] bg-[#E1E4E7] h-[48px] rounded" />
            <CartButton />
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <MenuHeader />
          <p className="text-[24px] font-semibold">Categorias</p>
        </nav>
      </header>
    </>
  );
};
