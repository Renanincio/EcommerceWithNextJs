"use client";

import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";
import { FetchProducts } from "@/utils/fetchProducts";
import { Product } from "@/utils/product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export const Cards = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchProducts();
      if (Array.isArray(response)) {
        setProducts(response.slice(0, 8));
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="w-full grid grid-cols-4 grid-rows-2 gap-4">
      {products.map((product) => {
        const imageBase64 =
          product.image && product.image.data.length > 0
            ? `data:image/jpeg;base64,${convertBlobToBase64(product.image)}`
            : "/placeholder.png";
        return (
          <Link href={`/product/${product.id}`}>
          <li
            className="flex flex-col h-[400px] w-[275px] rounded col-span-1 row-span-1"
            key={product.id}
          >
            <div className="h-[50%] w-full bg-[#DCDFE9] flex justify-center items-center">
              <Image
                src={imageBase64}
                width={250}
                height={250}
                alt=""
                className="w-[125px] h-[125px] hover:scale-105 transition-all delay-75"
              />
            </div>

            <div className="w-full h-[50%] bg-[#FCFBFF] flex flex-col justify-between">
              <p className="text-center px-6 mt-8">{product.description}</p>
              <p className="text-[18px] font-bold text-start pl-4 mb-4">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </li>
          </Link>
        );
      })}
    </ul>
  );
};
