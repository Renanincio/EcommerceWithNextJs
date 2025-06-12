export async function fetchFirstTenProducts() {
  const res = await fetch("http://localhost:3333/products?limit=10", {
    cache: "force-cache",
  });

  const data = await res.json();

  return data.products;
}