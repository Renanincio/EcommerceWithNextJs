"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn, getSession } from "next-auth/react";
import { z } from "zod";
import { FaApple, FaFacebook, FaGooglePlus } from "react-icons/fa";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Digite um e-mail válido."),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres."),
});

type Login = z.infer<typeof loginSchema>;

export default function Login() {
  const { data: session, status } = useSession();
  console.log("Session Data:", session);

  const [authError, setAuthError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuthStore();
  const router = useRouter();

  if (status === "loading") return <p>Carregando...</p>;

  const onSubmit = async (data: Login) => {
    try {
      await login(data);
      router.push("/");
      setAuthError(false);
    } catch (error) {
      setAuthError(true);
    }
  };

  const handleOAuthLogin = async (provider: string) => {
    try {
      const result = await signIn(provider, { redirect: false });
      if (result?.ok && result?.url) {
        const session = await getSession();
        if (session) {
          const user = session.user;
          if (user) {
            await login({
              email: session.user.email || "",
              password: "", 
            });
            router.push("/");
          }
        }
      }
    } catch (error) {
      setAuthError(true);
    }
  };

  if (!session) {
    return <div>Você não está autenticado</div>;
  }

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
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label htmlFor="password" className="font-semibold">
          Senha:
        </label>
        <input
          type="password"
          placeholder="Senha"
          {...register("password")}
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="text-white bg-[#A71B4A] cursor-pointer py-4 rounded font-semibold text-[20px] text-center"
        >
          Entrar
        </button>
        {authError && <p className="text-red-500">Email ou senha incorretos</p>}
        <p className="font-semibold">Ou entre com</p>

        <div className="flex gap-4 w-full">
          <button
            type="button"
            onClick={() => handleOAuthLogin("google")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Google
            <FaGooglePlus />
          </button>
          <button
            type="button"
            onClick={() => handleOAuthLogin("facebook")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Facebook
            <FaFacebook />
          </button>

          <button
            type="button"
            onClick={() => handleOAuthLogin("apple")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Apple
            <FaApple />
          </button>
        </div>
        <p>
          Você não tem uma conta?{" "}
          <Link href={"/sign-up"}>
            <span className="text-fuchsia-400">Inscreva-se</span>
          </Link>
        </p>
      </form>
    </>
  );
}