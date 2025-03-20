import { api } from "@/data/server";

export const FetchProducts = async () => {
  try {
    const response = await api.get("/products");
    if (Array.isArray(response.data.products)) {
      return response.data.products;
    } else {
      console.error("Products data is not an array");
      return [];
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
