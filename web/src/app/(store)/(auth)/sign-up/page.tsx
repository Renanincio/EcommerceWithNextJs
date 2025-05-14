"use client";

import CheckboxDemo from "@/components/checkbox";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebook, FaGooglePlus } from "react-icons/fa";
import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email("Digite um e-mail válido."),
    name: z.string().min(1, "Digite seu nome."),
    password: z
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres.")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula.")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula.")
      .regex(/\d/, "A senha deve conter pelo menos um número.")
      .regex(
        /[@$!%*?&.]/,
        "A senha deve conter pelo menos um caractere especial."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type Login = z.infer<typeof registerSchema>;

export default function Login() {
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(registerSchema),
  });

  const { signup } = useAuthStore();
  const router = useRouter();

  const onSubmit = async (data: Login) => {
    try {
      await signup(data);
      setAuthError(null);
      router.push("/login");
    } catch (error) {
      if (
        error instanceof Error &&
        error.message.includes("E-mail já existente")
      ) {
        setAuthError("Ocorreu um erro ao criar a conta.");
      } else {
        setAuthError("Este e-mail já está em uso. Tente outro.");
      }
    }
  };

  useEffect(() => {
    document.title = "ZiShop - Registre-se";
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-14 p-8 bg-white flex justify-center gap-4 m-auto flex-col w-[500px] min-h-[500px] rounded border-[1px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7]"
      >
        <legend>
          <h1 className="font-bold text-[32px]">Crie sua conta</h1>
        </legend>

        <label htmlFor="name" className="font-semibold">
          Nome completo:
        </label>
        <input
          placeholder="Digite seu nome completo"
          {...register("name")}
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <label htmlFor="email" className="font-semibold">
          E-mail:
        </label>
        <input
          placeholder="Digite seu email"
          {...register("email")}
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <label htmlFor="password" className="font-semibold">
          Senha:
        </label>
        <input
          type="password"
          placeholder="Crie sua senha"
          {...register("password")}
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.password && (
          <p className="text-red-500">
            A senha deve possuir no mínimo 8 caracteres <br />
            Uma letra maiúscula e uma letra minúscula <br />
            Um número <br />
            Um caractere especial [@$!%*?&.]
          </p>
        )}

        <label htmlFor="confirmPassword" className="font-semibold">
          Confirme sua senha:
        </label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          className="bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] rounded p-6"
        />
        {errors.confirmPassword && (
          <p className="text-red-500">
            A senha deve possuir no mínimo 8 caracteres <br />
            Uma letra maiúscula e uma letra minúscula <br />
            Um número <br />
            Um caractere especial [@$!%*?&.]
          </p>
        )}
        <CheckboxDemo />

        <button
          type="submit"
          className="text-white bg-[#A71B4A] cursor-pointer py-4 rounded font-semibold text-[20px] text-center"
        >
          Entrar
        </button>
        {authError && <p className="text-red-500">{authError}</p>}
        <p className="font-semibold">Ou crie sua conta com</p>

        <div className="flex gap-4 w-full">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Google
            <FaGooglePlus />
          </button>
          <button
            type="button"
            onClick={() => signIn("facebook")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Facebook
            <FaFacebook />
          </button>

          <button
            type="button"
            onClick={() => signIn("apple")}
            className="cursor-pointer bg-white border-[3px] border-[#E1E4E7] shadow-md shadow-[#E1E4E7] py-2 px-4 rounded w-full text-center flex items-center gap-2 justify-center"
          >
            Apple
            <FaApple />
          </button>
        </div>
      </form>
    </>
  );
}
