import { Product } from "@/types/product";

export async function searchProducts(query: string): Promise<Product[]> {
  const response = await fetch(`http://localhost:3333/products`);
  if (!response.ok) throw new Error("Erro ao buscar produtos");

  console.log("Buscando produtos com a query:", response);

   const json = await response.json();

  const allProducts: Product[] = Array.isArray(json) ? json : json.products;;

  const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return filtered;
}