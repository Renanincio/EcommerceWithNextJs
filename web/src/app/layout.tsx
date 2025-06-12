"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { CartProvider } from "@/contexts/cart-context/CartProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#F3F4F5] text-[#424750] antialiased">
        <CartProvider>
          <SessionProvider>{children}</SessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
