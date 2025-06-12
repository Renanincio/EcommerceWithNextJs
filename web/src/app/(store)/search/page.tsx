import { Cards } from "@/components/home/cards";
import { searchProducts } from "@/services/searchProducts";
import { redirect } from "next/navigation";
import type { Metadata } from "next";

interface SearchProps {
  searchParams: {
    q: string;
  };
}

export async function generateMetadata({ searchParams }: SearchProps): Promise<Metadata> {
  const query = searchParams.q || "";

  return {
    title: query ? `Zishop - Resultados para "${query}"` : "Zishop - Busca",
  };
}

export default async function SearchPage({ searchParams }: SearchProps) {
  const query = searchParams.q || "";
  if (!query) {
    redirect("/");
  }
  const products = await searchProducts(query);

  return (
    <Cards products={products} />
  );
}
