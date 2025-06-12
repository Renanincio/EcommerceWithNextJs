import React from "react";
import { CategoryButton } from "./categoryButton";
import Image from "next/image";
import Link from "next/link";

export const CategoryGrid = () => {
  return (
    <section className="w-full text-center">
      <h2 className="font-normal text-[34px] my-12">Categoria de bens</h2>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-[300px] gap-4">
        <div className="col-span-1 row-span-2 rounded bg-[#ADE8F4] flex items-center justify-between gap-2 p-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-[20px]">Produtos Digitais</h3>
            <p className="text-start">
              Oferecemos os produtos mais novos aos preços mais competitivos
            </p>
            <CategoryButton />
          </div>
          <Image
            className="w-[125px] h-[150px] hover:scale-95 transition-all delay-75"
            src="/category1.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-2 rounded bg-[#FFDDD2] flex items-center justify-between gap-2 p-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-[20px]">Moda e Roupas</h3>
            <p className="text-start">
              As marcas mais populares com os preços mais razoáveis
            </p>
            <CategoryButton />
          </div>
          <Image
            className="w-[140px] h-[140px] hover:scale-95 transition-all delay-75"
            src="/category2.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-1 rounded bg-warning flex items-center justify-between gap-2 p-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-[20px]">Moda e Roupas</h3>
            <p className="text-start">
              As marcas mais populares com os preços mais razoáveis
            </p>
            <CategoryButton />
          </div>
          <Image
            className="w-[80px] h-[80px] hover:scale-95 transition-all delay-75"
            src="/category3.png"
            width={250}
            height={250}
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-1 rounded bg-warning flex items-center justify-between gap-2 p-4">
          <Image
            className="w-[125px] h-[130px] hover:scale-95 transition-all delay-75"
            src="/category4.png"
            width={250}
            height={250}
            alt=""
          />
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-[20px]">Moda e Roupas</h3>
            <p className="text-start">
              As marcas mais populares com os preços mais razoáveis
            </p>
            <CategoryButton />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 w-full h-[300px] gap-4 mt-6">
        <div className="col-span-2 row-span-2 rounded bg-[#CCD5AE] flex items-center justify-between gap-2 p-4">
          <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-[20px]">Móveis e cozinha</h3>
            <p className="text-start">De acordo com os desígnios da época</p>
            <CategoryButton />
          </div>
          <Image
            className="w-[275px] h-[225px] hover:scale-95 transition-all delay-75"
            src="/category5.png"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-2 rounded bg-[#CCE3DE] flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <h3 className="font-semibold text-[20px]">Brinquedos e Bebê</h3>
            <p className="text-center">
              Uma combinação de entretenimento e criatividade
            </p>
            <CategoryButton />
          </div>
          <Image
            className="w-[125px] h-[100px] hover:scale-95 transition-all delay-75"
            src="/category6.png"
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="col-span-1 row-span-2 rounded bg-[#FBB13C] flex items-center justify-between gap-2 p-4">
          <div className="flex flex-col items-start w-[150px] gap-2">
            <h3 className="font-semibold text-[20px]">
              Livros, Papelaria e Arte
            </h3>
            <p className="text-start">Variedade na escolha</p>
            <Link href={"/"}>
              <button className="bg-pinkPrimary hover:scale-105 transition-all delay-75 rounded py-2 w-full text-white ">
                Ver todos os produtos
              </button>
            </Link>
          </div>
          <Image
            className="w-[75px] h-[200px] hover:scale-95 transition-all delay-75"
            src="/category7.png"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
