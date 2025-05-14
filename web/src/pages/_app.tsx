import AuthProvider from "@/contexts/auth-context/AuthProvider";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  console.log("App.tsx carregado!");

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
