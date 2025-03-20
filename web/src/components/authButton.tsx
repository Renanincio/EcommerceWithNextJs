"use client";

import { HiOutlineLogin } from "react-icons/hi";
import Link from "next/link";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";

export const AuthButton = () => {
  const { user } = useAuthStore();
  console.log(user)

  return (
    <>
      {user?.name ? (
        <p>Olá, {user.name.split(" ")[0]}</p>
      ) : (
        <div className=" flex gap-4 items-center h-[24px] text-[14px] border-[#E1E4E7] border-2 rounded py-4 px-6">
          <HiOutlineLogin className="text-[24px]" />
          <Link href={"/login"}>
            <span>Login</span>
          </Link>

          <div className="w-[2px] bg-[#424750] h-[16px] rounded" />
          <Link href={"/sign-up"}>
            <span>Sign Up</span>
          </Link>
        </div>
      )}
    </>
  );
};
