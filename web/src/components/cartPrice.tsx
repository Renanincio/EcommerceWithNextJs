import React from "react";
import { CountCart } from "./countCart";
import { useCartStore } from "@/contexts/cart-context/CartProvider";

interface CartPriceProps {
  id: string;
  quantity: number;
  price: number;
}
export const CartPrice = ({ id, quantity, price }: CartPriceProps) => {
  const { updateQuantity } = useCartStore();
  return (
    <div className="flex gap-2 px-3">
      <CountCart
        id={id}
        initial={quantity}
        onChange={(quantity) => updateQuantity(id, quantity)}
      />
      <div>
        <p>Valor total</p>
        <p className="text-[16px] font-semibold line-through">
          R$ {(price * quantity * 1.1).toFixed(2)}
        </p>
        <p className="text-[24px] font-semibold mb-6">
          R${(price * quantity).toFixed(2)}
          <span className="text-[14px] ml-1">(-10%)</span>
        </p>
      </div>
    </div>
  );
};
