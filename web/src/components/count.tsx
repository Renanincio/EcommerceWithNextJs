"use client"

import { useCount } from "@/contexts/count-context/CountContext";
import { CgMathPlus } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";

export const Count = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="flex items-center gap-4">
        <CgMathPlus onClick={increment} className="text-[24px] cursor-pointer" />
        <span className="px-8 py-2 border-gray-600 border-[1px] font-semibold text-[19px]">{count}</span>
        <CgMathMinus onClick={decrement} className="text-[24px] cursor-pointer" />
    </div>
  )
}
