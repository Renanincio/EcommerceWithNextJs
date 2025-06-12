import { Product } from "@/types/product";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Query inválida" }, { status: 400 });
  }

  try {
    const validatedQuery = z.string().min(1).parse(query);

    const res = await fetch("http://localhost:3333/products", {
      next: { revalidate: 0 },
    });

    const products = await res.json();

    const filtered = products.filter((product: Product) =>
      product.name.toLowerCase().includes(validatedQuery.toLowerCase())
    );

    return NextResponse.json(filtered);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}