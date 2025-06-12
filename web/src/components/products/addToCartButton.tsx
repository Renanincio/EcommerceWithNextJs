"use client";

import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { FaCartPlus } from "react-icons/fa";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: { type: "Buffer"; data: number[] };
  quantity: number;
}

export default function AddToCartButton({
  id,
  name,
  price,
  image,
  quantity,
}: ProductProps) {
  const { addToCart } = useCartStore();

  return (
    <button
      className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-4 px-8 text-white flex
                  items-center justify-center gap-2 mt-6 cursor-pointer"
      onClick={() => {
        addToCart({
          id,
          name,
          price,
          image,
          quantity,
        });
      }}
    >
      <FaCartPlus />
      Adicionar ao carrinho
    </button>
  );
}
