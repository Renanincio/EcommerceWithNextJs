import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <>
      <header className="w-full flex items-start gap-4 justify-center h-[150px] border-b-[#E1E4E7] border-b-2 flex-col">
        <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src="/Captura de tela 2024-10-08 193557.png"
              className="h-[48px] w-[92px] rounded-full"
              width={128}
              height={128}
              alt=""
            />
          </Link>
          <input
            placeholder="Pesquisar"
            className="bg-[#E1E4E7] w-[620px] h-[48px] p-4 rounded"
          ></input>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#424750] flex gap-4 items-center h-[24px] text-[14px] border-[#E1E4E7] border-2 rounded py-4 px-6">
            <HiOutlineLogin className="text-[24px]" />
            <Link href={"/"}>
              <span>Login</span>
            </Link>

            <div className="w-[2px] bg-[#424750] h-[16px] rounded" />
            <Link href={"/"}>
              <span>Sign Up</span>
            </Link>
          </button>
          <div className="w-[2px] bg-[#E1E4E7] h-[48px] rounded" />
          <button>
            <BsCart3 className="text-[24px] text-[#424750] " />
          </button>
        </div>
        </div>
        <button className=" text-[#424750] text-[24px] font-semibold flex items-center gap-2">
        <IoMenu className=" "/>
          <span>Categorias</span>
        </button>
      </header>
    </>
  );
};
