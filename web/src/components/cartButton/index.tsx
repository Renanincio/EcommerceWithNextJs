"use client";

import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { Count } from "../count";

export const CartButton = () => {
  const { cart } = useCartStore();

  return (
    <Popover.Root>
      <Popover.Trigger className="relative cursor-pointer">
        <BsCart3 size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {cart.length}
          </span>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white shadow-lg rounded-md overflow-scroll h-[500px]"
          side="bottom"
          align="end"
        >
          {cart.length > 0 ? (
            <div className="flex-col">
              <p className="border-b-slate-700 border-b-[1px] p-2">
                {cart.length}
              </p>
              {cart.map((item, index) => {
                const imageBase64 =
                  item.image && item.image.data.length > 0
                    ? `data:image/jpeg;base64,${convertBlobToBase64(
                        item.image
                      )}`
                    : "/placeholder.png";
                return (
                  <div>
                    <ul>
                      <li className="flex flex-col border-b-slate-700 border-b-[1px] py-2">
                        <div className="flex justify-around">
                          <Image
                            src={imageBase64}
                            width={250}
                            height={250}
                            alt=""
                            className="w-[125px] h-[125px] m-auto"
                          />
                          <p>{item.name}</p>
                        </div>
                        <div className="flex gap-2 px-3">
                          <Count />
                          <div>
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
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Seu carrinho está vazio.</p>
          )}
          <Popover.Close className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer">
            ✕
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
