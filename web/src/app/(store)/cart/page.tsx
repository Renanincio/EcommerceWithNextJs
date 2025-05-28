"use client";

import { Count } from "@/components/count";
import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";
import Image from "next/image";

export default function Cart() {
  const { cart } = useCartStore();

  const quantidadeTotal = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const valorTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

  return (
    <>
      <div className="flex flex-col">
        <div>
          <p className="w-[300px] font-medium text-[18px] capitalize mt-4">
            Carrinho
          </p>
        </div>
        <div className="flex">
          <div className="flex w-full">
            <div className="flex justify-between w-full">
              <ul className="flex flex-col w-full">
                {cart.map((item, index) => {
                  const imageBase64 =
                    item.image && item.image.data.length > 0
                      ? `data:image/jpeg;base64,${convertBlobToBase64(
                          item.image
                        )}`
                      : "/placeholder.png";
                  return (
                    <li className="flex items-center border-b-slate-700 border-b-[1px] py-2 gap-4 justify-between p-4" key={index}>
                      <div className="flex justify-around items-center gap-2">
                        <Image
                          src={imageBase64}
                          width={250}
                          height={250}
                          alt=""
                          className="w-[125px] h-[125px] m-auto"
                        />
                        <p>{item.name}</p>
                      </div>
                      <div className="flex gap-2 px-3 items-center">
                        <Count />
                        <div className="flex-col flex">
                          <p>Valor total</p>
                          <p className="text-[16px] font-semibold line-through">
                            R$ {(item.price * item.quantity * 1.1).toFixed(2)}
                          </p>
                          <p className="text-[24px] font-semibold mb-6">
                            R${(item.price * item.quantity).toFixed(2)}
                            <span className="text-[14px] ml-1">(-10%)</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="ml-2 self-end shadow-md rounded-lg bg-white/50 backdrop-blur-lg w-[350px] h-[300px] p-8 mb-8">
            <h2 className="text-[24px] font-semibold">Resumo do pedido</h2>
            <div className="mt-8">
              <p className="text-[16px] font-medium">
                Quantidade total: {quantidadeTotal}
              </p>
              <p className="text-[20px] font-medium mb-6">
                Valor total: R${" "}
                {valorTotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
            <button onClick={handleCheckout} className="w-full bg-[#A71B4A] text-white py-2 rounded-lg hover:bg-[#792541] transition-colors text-center cursor-pointer">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
