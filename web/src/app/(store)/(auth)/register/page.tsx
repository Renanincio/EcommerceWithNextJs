"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CheckboxDemo from "@/components/checkbox";
import FormField from "@/components/auth/formField";
import { SocialLoginButtons } from "@/components/auth/socialLoginButtons";
import { usePageTitle } from "@/hooks/usePageTitle";
import { useRegister } from "@/hooks/useRegister";
import { registerSchema } from "@/schemas/registerSchema";
import { RegisterData } from "@/types/RegisterData";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: zodResolver(registerSchema) });

  const { handleRegister, error, setError } = useRegister();

  usePageTitle("ZiShop - Registre-se");

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="my-14 p-8 bg-white flex justify-center gap-4 m-auto flex-col w-[500px] min-h-[500px] rounded border border-[#E1E4E7] shadow-md"
    >
      <h1 className="font-bold text-3xl">Crie sua conta</h1>

      <FormField
        label="Nome completo"
        placeholder="Digite seu nome completo"
        register={register("name")}
        error={errors.name?.message}
      />

      <FormField
        label="E-mail"
        placeholder="Digite seu email"
        register={register("email")}
        error={errors.email?.message}
      />

      <FormField
        label="Senha"
        type="password"
        placeholder="Crie sua senha"
        register={register("password")}
        error={errors.password?.message}
      />

      <FormField
        label="Confirme sua senha"
        type="password"
        placeholder="Confirme sua senha"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <CheckboxDemo />

      <button
        type="submit"
        className="text-white bg-[#A71B4A] py-4 rounded font-semibold text-lg text-center"
      >
        Cadastrar
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <p className="font-semibold">Ou crie sua conta com</p>
      <SocialLoginButtons
        onError={() => setError("Erro ao autenticar com rede social.")}
      />
    </form>
  );
}
