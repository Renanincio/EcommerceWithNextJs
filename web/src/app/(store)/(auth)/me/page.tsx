"use client";

import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { usePageTitle } from "@/hooks/usePageTitle";
export default function me() {
  const { user } = useAuthStore();

  usePageTitle("ZiShop - Meu perfil");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F3F4F5]">
      <section
        aria-labelledby="profile-title"
        className="bg-white p-8 rounded shadow-md w-[500px] h-[500px] my-12"
      >
        <header className="border-b-[1px] border-[#E1E4E7] pb-4">
          <h1 className="font-bold text-[20px]">Meu perfil</h1>
          <p className="text-[16px]">Gerenciar e proteger sua conta</p>
        </header>
        <section className="mt-8 flex flex-col gap-2">
          <dl className="flex flex-col gap-4">
            <div>
              <dt className="font-bold">Nome:</dt>
              <dd>{user?.name}</dd>
            </div>
            <div>
              <dt className="font-bold">Email:</dt>
              <dd>{user?.email}</dd>
            </div>
          </dl>
        </section>
      </section>
    </main>
  );
}
