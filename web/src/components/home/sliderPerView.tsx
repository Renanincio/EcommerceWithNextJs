"use client";


import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderProductCard } from "./sliderProductCard";
import { FetchProducts } from "@/services/fetchProducts";

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
          return (
            <SwiperSlide>
              <SliderProductCard key={product.id} product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ul>
  );
};
