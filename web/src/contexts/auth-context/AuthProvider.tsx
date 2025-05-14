"use client";

import { api } from "@/data/server";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { signIn, signOut, useSession } from "next-auth/react";
import { createContext, ReactNode, useEffect, useState } from "react";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

interface LoginInputProps {
  email: string;
  password: string;
}

interface RegisterInputProps {
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: UserProps | null;
  error: null | string;
  login: (data: LoginInputProps) => Promise<void>;
  signup: (data: RegisterInputProps) => Promise<void>;
  logout: () => void;
  isLogged: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  error: null,
  signup: async () => {},
  login: async () => {},
  logout: () => {},
  isLogged: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  const signup = async (data: RegisterInputProps) => {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error("error", error.response.data.message);
        setError(error.response.data.message);
        throw error;
      });
  };

  const login = async (data: LoginInputProps, provider?: string) => {
    if (provider) {
      const result = await signIn(provider, { redirect: false });
  
      if (result?.ok) {
        const token = Cookies.get("next-auth.session-token") || Cookies.get("__Secure-next-auth.session-token");
  
        if (token) {
          Cookies.set("AccessToken", token, { expires: 7, secure: true, sameSite: "Lax" });
  
          isLogged(); 
        }
      }
      return;
    }
  
    await api
      .post("/sessions", data)
      .then((response) => {
        const token = response.data.token;
  
        if (token) {
          Cookies.set("AccessToken", token, { expires: 7, secure: true, sameSite: "Lax" });
  
          isLogged();
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };
  const logout = async () => {
    await signOut({ callbackUrl: "/" }); 
  
    Cookies.remove("AccessToken");
    Cookies.remove("next-auth.callback-url");
    Cookies.remove("next-auth.csrf-token");
  
    setUser(null);
    setIsAuthenticated(false); 

    window.location.href = "/";
  };

  const isLogged = () => {
    const token = Cookies.get("AccessToken");

    if (token) {
      try {
        const decoded = jwt.decode(token) as jwt.JwtPayload | null;
        if (decoded && typeof decoded === "object" && "sign" in decoded && typeof decoded.sign === "object") {
          setUser({
            id: decoded.sign.sub as string,
            name: decoded.sign.name as string,
            email: decoded.sign.email as string,
          });
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    } else if (session?.user) {
      setUser({
        id: session.user.id || "",
        name: session.user.name || "",
        email: session.user.email || "",
      });
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    isLogged();
  }, [session]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, signup, error, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
