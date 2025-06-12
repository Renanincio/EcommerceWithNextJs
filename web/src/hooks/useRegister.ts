import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { RegisterData } from "@/types/RegisterData";

export function useRegister() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { signup } = useAuthStore();

  const handleRegister = async (data: RegisterData) => {
    try {
      await signup(data);
      router.push("/login");
    } catch (err: any) {
      if (err instanceof Error && err.message.includes("E-mail já existente")) {
        setError("E-mail já existente.");
      } else {
        setError("Erro ao cadastrar. Tente novamente.");
      }
    }
  };

  return { handleRegister, error, setError };
}