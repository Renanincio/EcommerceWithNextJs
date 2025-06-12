"use client";

import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { useState } from "react";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";

type CountProps = {
  initial: number;
  onChange: (quantity: number) => void;
  id: string;
};
export const CountCart = ({ initial, onChange, id }: CountProps) => {
  const { removeFromCart } = useCartStore();
  const [count, setCount] = useState(initial);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const decrement = () => {
    const newCount = count > 1 ? count - 1 : 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div className="flex items-center gap-4">
      <CgMathPlus onClick={increment} className="text-[24px] cursor-pointer" />
      <span className="px-8 py-2 border-gray-600 border-[1px] font-semibold text-[19px]">
        {count}
      </span>
      {count > 1 ? (
        <CgMathMinus
          onClick={decrement}
          className="text-[24px] cursor-pointer"
        />
      ) : (
        <FaTrashAlt
          onClick={() => removeFromCart(id)}
          className="text-red-600 cursor-pointer"
        />
      )}
    </div>
  );
};
