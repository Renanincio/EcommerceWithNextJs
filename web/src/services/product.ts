import { api } from "@/data/server";
import { Product } from "@/types/product";

export async function fetchProductBySlug(
  slug: string
): Promise<Product | null> {
  try {
    const response = await api.get(`/product/${slug}`);
    return response.data.product;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
}
