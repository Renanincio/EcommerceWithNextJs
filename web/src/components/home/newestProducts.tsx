'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Cards } from "./cards";
import { Product } from "@/types/product";
import { FetchProducts } from "@/services/fetchProducts";

export const NewestProducts = () => {
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
    <section className="w-full text-center">
      <h2 className="font-normal text-[34px] my-12">Produtos mais novos</h2>
      <div>
        <Cards products={products} />
      </div>
      <Link href={"/"}>
        <button className="bg-pinkPrimary hover:scale-105 transition-all delay-75 rounded py-2 w-[250px] text-white mt-8">
          Ver todos os novos produtos
        </button>
      </Link>
    </section>
  );
};
