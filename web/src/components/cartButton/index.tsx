"use client";

import { useCartStore } from "@/contexts/cart-context/CartProvider";
import { getImageSrcFromBlob } from "@/services/getImageSrcFromBlob";
import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CartPrice } from "../cartPrice";

export const CartButton = () => {
  const { cart } = useCartStore();

  return (
    <Popover.Root>
      <Popover.Trigger className="relative cursor-pointer">
        <BsCart3 size={24} />
        {cart.length > 0 && (
          <span className="absolute top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {cart.length}
          </span>
        )}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="bg-white shadow-lg rounded-md overflow-scroll w-[400px] h-[300px] z-10"
          side="bottom"
          align="end"
        >
          {cart.length > 0 ? (
            <div className="flex-col">
              <header className="flex justify-between items-center border-b-slate-700 border-b-[1px] p-2">
                <p className="">{cart.length}</p>
                <Link href={"/cart"}>
                  <p className="text-[#2ECEF0] cursor-pointer mr-4 text-[14px]">
                    Ver carrinho
                  </p>
                </Link>
              </header>
              <section>
                <ul>
                  {cart.map((item, index) => {
                    const src = getImageSrcFromBlob(item.image);
                    return (
                      <li
                        key={item.id}
                        className="flex flex-col border-b-slate-700 border-b-[1px] py-2"
                      >
                        <article className="flex justify-around">
                          <Image
                            src={src}
                            width={250}
                            height={250}
                            alt={`Imagem do produto ${item.name}`}
                            className="w-[125px] h-[125px] m-auto"
                          />
                          <p>{item.name}</p>
                        </article>
                        <CartPrice
                          id={item.id}
                          quantity={item.quantity}
                          price={item.price}
                        />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center border-b-slate-700 border-b-[1px] p-2">
                <p className="">{cart.length}</p>
                <Link href={"/cart"}>
                  <p className="text-[#2ECEF0] cursor-pointer mr-4 text-[14px]">
                    Ver carrinho
                  </p>
                </Link>
              </div>
              <div className="flex items-center h-full justify-center">
                <p className="text-gray-500 mt-4">Seu carrinho está vazio</p>
              </div>
            </>
          )}
          <Popover.Close className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer">
            ✕
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
