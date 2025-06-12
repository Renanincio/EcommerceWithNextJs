import { CartItemType } from "@/types/CartItemType";

export function useCartTotals(cart: CartItemType[]) {
    const quantidadeTotal = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const valorTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return { quantidadeTotal, valorTotal };
}