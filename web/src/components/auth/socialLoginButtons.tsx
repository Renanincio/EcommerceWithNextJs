import useAuthStore from "@/contexts/auth-context/UseAuthStore";
import { getSession, signIn } from "next-auth/react";
import { FaFacebook, FaGooglePlus } from "react-icons/fa";

type SocialLoginButtonsProps = {
  onError: () => void;
};

export const SocialLoginButtons = ({ onError }: SocialLoginButtonsProps) => {
  const { login } = useAuthStore();

  const handleOAuthLogin = async (provider: string) => {
    try {
      const result = await signIn(provider, { callbackUrl: "/" });
      if (result?.ok && result?.url) {
        const session = await getSession();
        if (session?.user?.email) {
          await login({
            email: session.user.email,
            password: "",
          });
        }
      } else {
        onError();
      }
    } catch (error) {
      onError();
    }
  };
  return (
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
    </div>
  );
};
