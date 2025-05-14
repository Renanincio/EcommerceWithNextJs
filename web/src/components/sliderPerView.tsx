"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { FetchProducts } from "@/utils/fetchProducts";
import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";
import { Product } from "@/utils/product";
import Link from "next/link";

export const SliderPerView = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchProducts();
      if (Array.isArray(response)) {
        setProducts(response.slice(0, 10));
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="w-[80%]">
      <Swiper
        rewind={true}
        slidesPerView={5}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => {
          const imageBase64 =
            product.image && product.image.data.length > 0
              ? `data:image/jpeg;base64,${convertBlobToBase64(product.image)}`
              : "/placeholder.png";
          return (
            <SwiperSlide>
              <Link href={`/product/${product.id}`}>
                <li
                  className="inset-0 bg-white/50 backdrop-blur-lg rounded h-[250px] flex flex-col justify-center hover:scale-105 transition-all delay-75"
                  key={product.id}
                >
                  <Image
                    src={imageBase64}
                    width={250}
                    height={250}
                    alt=""
                    className="w-[125px] h-[125px] m-auto"
                  />
                  <p className="text-[24px] font-light truncate max-w-full px-1">
                    {product.name}
                  </p>
                  <div className="p-2">
                  <p className="text-[16px] font-semibold line-through">
                    R$ {(product.price * 1.1).toFixed(2)}
                  </p>
                  <p className="text-[18px] font-bold">
                    {product.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  </div>
                </li>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
};
