import { CartItemType } from "@/types/CartItemType";
import { getImageSrcFromBlob } from "@/services/getImageSrcFromBlob";
import Image from "next/image";
import { CartPrice } from "../cartPrice";


export const CartItem = ({ product }: { product: CartItemType }) => {

  const src = getImageSrcFromBlob(product.image);

  return (
    <li className="border-b-slate-700 border-b-[1px] p-4" key={product.id}>
      <article className="flex items-center justify-between gap-4">
        <div className="flex justify-around items-center gap-2">
          <Image
            src={src}
            width={250}
            height={250}
            alt=""
            className="w-[125px] h-[125px] m-auto"
          />
          <p>{product.name}</p>
        </div>
        <CartPrice id={product.id} quantity={product.quantity} price={product.price} />
      </article>
    </li>
  );
};
