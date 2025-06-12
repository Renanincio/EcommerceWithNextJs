import Link from "next/link";
import React from "react";
import { SliderPerView } from "./sliderPerView";

export const SpecialOffer = () => {
  return (
    <section className="bg-[#3CBECF] w-full justify-evenly rounded py-6 flex items-center h-[300px]">
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-[24px] font-semibold mt-16">Ofertas especiais</h2>
        <Link className="m-auto" href={"/"}>
          <button className="px-8 py-2 inset-0 bg-white/50 backdrop-blur-lg rounded font-semibold">
            Veja tudo
          </button>
        </Link>
      </div>
      <SliderPerView />
    </section>
  );
};
