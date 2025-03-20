import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import AuthProvider from "@/contexts/auth-context/AuthProvider";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        <div className="m-auto w-[1170px]">
          <Header />
          {children}
          <Footer />
          <p className="my-4 text-center">
            © 2022 ZiShop. Todos os direitos reservados - Projetado e
            desenvolvido com por Kehyshow
            <br /> O trabalho é para melhorar a vida, não o contrário. CafeDX
          </p>
        </div>
      </AuthProvider>
    </>
  );
}
