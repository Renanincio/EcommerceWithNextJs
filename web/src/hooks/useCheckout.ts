import { useCartStore } from "@/contexts/cart-context/CartProvider";

export function useCheckout() {
  const { cart } = useCartStore();
  const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    }
  };

  return { handleCheckout };
}
