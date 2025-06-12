"use client";

import { useState } from "react";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

type CountProps = {
  initial: number;
  onChange: (quantity: number) => void;
};
export const Count = ({ initial, onChange }: CountProps) => {
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
      <CgMathMinus onClick={decrement} className="text-[24px] cursor-pointer" />
    </div>
  );
};
