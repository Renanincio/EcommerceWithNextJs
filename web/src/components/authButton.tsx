"use client";

import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { UserButton } from "./userButton";

export const AuthButton = () => {
  const { user } = useAuthStore();

  return (
    <>
      {user?.name ? (
        <UserButton />
      ) : (
        <div className=" flex gap-4 items-center h-[24px] text-[14px] border-[#E1E4E7] border-2 rounded py-4 px-6">
          <HiOutlineLogin className="text-[24px]" />
          <Link href={"/login"}>
            <span>Entrar</span>
          </Link>

          <div className="w-[2px] bg-[#424750] h-[16px] rounded" />
          <Link href={"/sign-up"}>
            <span>Registre-se</span>
          </Link>
        </div>
      )}
    </>
  );
};
