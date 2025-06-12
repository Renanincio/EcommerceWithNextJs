export function useSearch() {
  const handleSearch = async (query: string) => {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data = await response.json();
    return data;
  };

  return { handleSearch };
}