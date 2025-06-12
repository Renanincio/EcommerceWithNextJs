"use client";

import { SocialLoginButtons } from "@/components/auth/socialLoginButtons";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { loginSchema } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormButton } from "./formButton";
import { LoginZod } from "@/types/LoginData";

export const LoginForm = () => {
  const { data: session, status } = useSession();
  console.log("Session Data:", session);

  const [authError, setAuthError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginZod>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    document.title = "ZiShop - Entrar";
  }, []);

  if (status === "loading") return <p>Carregando...</p>;

  const onSubmit = async (data: LoginZod) => {
    try {
      await login(data);
      router.push("/");
      setAuthError(false);
    } catch (error) {
      setAuthError(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-14 p-8 bg-white flex justify-center gap-4 m-auto flex-col w-[500px] min-h-[500px] rounded border-[1px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7]"
      >
        <legend>
          <h1 className="font-bold text-[32px]">Entre na sua conta</h1>
        </legend>

        <label htmlFor="email" className="font-semibold">
          E-mail:
        </label>
        <input
          placeholder="Email"
          {...register("email")}
          className="input"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label htmlFor="password" className="font-semibold">
          Senha:
        </label>
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
          className="input"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <FormButton />
        {authError && <p className="text-red-500">Email ou senha incorretos</p>}
        <p className="font-semibold">Ou entre com</p>

        <SocialLoginButtons onError={() => setAuthError(true)} />
        <p>
          Você não tem uma conta?{" "}
          <Link href={"/register"}>
            <span className="text-fuchsia-400">Inscreva-se</span>
          </Link>
        </p>
      </form>
    </>
  );
};
