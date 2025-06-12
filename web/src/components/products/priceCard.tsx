"use client";

import { useState } from "react";
import { Count } from "../count";
import AddToCartButton from "./addToCartButton";

interface Product {
  id: string;
  name: string;
  price: number;
  image: { type: "Buffer"; data: number[] };
}
export const PriceCard = ({ id, name, price, image }: Product) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="ml-auto self-end shadow-md rounded-lg bg-white/50 backdrop-blur-lg w-[350px] h-[300px] p-8">
      <p className="text-[20px] font-medium">Preço do produto</p>
      <p className="text-[16px] font-semibold line-through">
        R$ {(price * 1.1).toFixed(2)}
      </p>
      <p className="text-[24px] font-semibold mb-6">
        R${price.toFixed(2)}
        <span className="text-[14px] ml-1">(-10%)</span>
      </p>
      <Count initial={quantity} onChange={(value) => setQuantity(value)} />
      <AddToCartButton
        id={id}
        name={name}
        price={price}
        image={image}
        quantity={quantity}
      />
    </div>
  );
};
