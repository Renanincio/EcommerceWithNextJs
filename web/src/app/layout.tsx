"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-[#F3F4F5] text-[#424750] antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
