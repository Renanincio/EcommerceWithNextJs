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
              <li
                className="inset-0 bg-white/50 backdrop-blur-lg rounded h-[250px] flex flex-col justify-center items-center gap-4"
                key={product.id}
              >
                <Image
                  src={imageBase64}
                  width={250}
                  height={250}
                  alt=""
                  className="w-[125px] h-[125px]"
                />
                <p className="text-[24px] font-light">{product.name}</p>
                <p className="text-[18px] font-bold">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </li>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
};
