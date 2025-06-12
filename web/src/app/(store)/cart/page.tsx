"use client";

import { CartItem } from "@/components/cart/cartItem";
import { CartSummary } from "@/components/cart/cartSummary";
import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { useCartTotals } from "@/hooks/useCartTotal";
import { usePageTitle } from "@/hooks/usePageTitle";

export default function Cart() {
  const { cart } = useCartStore();
  const { quantidadeTotal, valorTotal } = useCartTotals(cart);

  usePageTitle("ZiShop - Carrinho");

  return (
    <main className="flex flex-col">
      <header>
        <h1 className="w-[300px] font-medium text-[18px] capitalize mt-4">
          Carrinho
        </h1>
      </header>
      <div className="flex">
        <section className="flex justify-between w-full">
          <ul className="flex flex-col w-full">
            {cart.map((product) => {
              return <CartItem key={product.id} product={product} />;
            })}
          </ul>
        </section>

        <section aria-label="Resumo do pedido">
          <CartSummary
            quantidadeTotal={quantidadeTotal}
            valorTotal={valorTotal}
          />
        </section>
      </div>
    </main>
  );
}
