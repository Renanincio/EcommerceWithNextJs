"use client";

import { LoginForm } from "@/components/auth/loginForm";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useSession } from "next-auth/react";

export default function Login() {
  const { status } = useSession();

  usePageTitle("ZiShop - Entrar");

  if (status === "loading") return <p>Carregando...</p>;

  return <LoginForm />;
}
