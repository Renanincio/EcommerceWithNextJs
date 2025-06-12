import { getImageSrcFromBlob } from "@/services/getImageSrcFromBlob";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const SliderProductCard = ({ product }: Props) => {
    const src = getImageSrcFromBlob(product.image);
  return (
    <Link href={`/product/${product.id}`}>
      <div className="inset-0 bg-white/50 backdrop-blur-lg rounded h-[250px] flex flex-col justify-center hover:scale-105 transition-all delay-75">
        <Image
          src={src}
          width={250}
          height={250}
          alt={product.name}
          className="w-[125px] h-[125px] m-auto object-contain"
        />
        <p className="text-[24px] font-light truncate px-1">{product.name}</p>
        <div className="p-2">
          <p className="text-[16px] font-semibold line-through text-gray-500">
            R$ {(product.price * 1.1).toFixed(2)}
          </p>
          <p className="text-[18px] font-bold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </Link>
  );
};
