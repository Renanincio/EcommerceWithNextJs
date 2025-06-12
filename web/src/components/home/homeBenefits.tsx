import Image from "next/image";
import React from "react";

const benefits = [
  { src: "/ul1.png", alt: "entrega expressa" },
  { src: "/ul2.png", alt: "pagamento no local" },
  { src: "/ul3.png", alt: "Suporte 24/7" },
  { src: "/ul4.png", alt: "Garantia de originalidade" },
];

export const HomeBenefits = () => {
  return (
    <section className="flex my-[20px] w-full justify-around">
      {benefits.map((src, alt) => (
        <article key={alt} className="text-center flex flex-col items-center">
          <Image
            className="w-[75px] h-[75px]"
            src={src.src}
            width={100}
            height={100}
            alt={src.alt}
          />
          <p>{src.alt}</p>
        </article>
      ))}
    </section>
  );
};
