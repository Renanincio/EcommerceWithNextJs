"use client"

import useAuthStore from "@/contexts/auth-context/UseAuthStore"
import { useEffect } from "react";

export default function me() {
    const { user } = useAuthStore()

    useEffect(() => {
      document.title = "ZiShop - Meu perfil";
    }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F4F5]">
        <div className="bg-white p-8 rounded shadow-md w-[500px] h-[500px] my-12">
            <div className="border-b-[1px] border-[#E1E4E7] pb-4">
        <h1 className="font-bold text-[20px]">Meu perfil</h1>
        <p className="text-[16px]">Gerenciar e proteger sua conta</p>

        </div>
        <div className="mt-8 flex flex-col gap-2">
        <p><span className="font-bold">Nome:</span>   {user?.name}</p>
        <p><span className="font-bold">Email:</span>  {user?.email}</p>
        </div>
        </div>
    </div>
  )
}
