import AddToCartButton from "@/components/addToCartButton";
import { Count } from "@/components/count";
import { api } from "@/data/server";
import { convertBlobToBase64 } from "@/utils/convertBlobToBase64";
import { Product } from "@/utils/product";
import { Metadata } from "next";
import Image from "next/image";
import { HiOutlineShare } from "react-icons/hi";
import { RiHeartAddLine } from "react-icons/ri";

export const dynamic = "force-dynamic";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const response = await api.get(`/product/${slug}`);
    return response.data.product;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);

  return {
    title: product?.name
      ? `${
          product.name.charAt(0).toUpperCase() + product.name.slice(1)
        } - ZiShop`
      : "ZiShop",
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProduct(params.slug);

  function formatDatasheet(datasheet: string) {
    return datasheet
      .trim()
      .split("\n")
      .map((line) => {
        const [key, ...rest] = line.replace("- ", "").split(":");
        return {
          key: key.trim(),
          value: rest.join(":").trim(),
        };
      });
  }

  const imageBase64 =
    product && product.image && product.image.data.length > 0
      ? `data:image/jpeg;base64,${convertBlobToBase64(product.image)}`
      : "/placeholder.png";

  return (
    <>
      {product ? (
        <div className="flex flex-col min-h-screen">
          <div>
            <p className="w-[300px] font-medium text-[18px] capitalize mt-4">
              {product.category}
            </p>
          </div>

          <div className="flex w-full gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <RiHeartAddLine className="text-[23px] cursor-pointer" />
              <HiOutlineShare className="text-[23px] cursor-pointer" />
            </div>

            <div className="mx-4">
              <Image
                src={imageBase64}
                width={250}
                height={250}
                alt=""
                className="w-[200px] h-[280px]"
              />
            </div>

            <div className="flex-1">
              <div className="border-b pb-2">
                <h1 className="text-[24px] font-bold capitalize">
                  {product.name}
                </h1>
              </div>
              <div className="mt-4 space-y-3 w-[300px]">
                {formatDatasheet(product.datasheet).map((item, index) => (
                  <div key={index} className="">
                    <p className="font-semibold text-slate-700 text-sm">
                      {item.key} :{" "}
                      <span className="text-slate-900 text-base">
                        {item.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-slate-700 text-sm w-[300px]">
                {product.description}
              </div>
            </div>

            <div className="ml-auto self-end shadow-md rounded-lg bg-white/50 backdrop-blur-lg w-[350px] h-[300px] p-8">
              <p className="text-[20px] font-medium">Preço do produto</p>
              <p className="text-[16px] font-semibold line-through">
                R$ {(product.price * 1.1).toFixed(2)}
              </p>
              <p className="text-[24px] font-semibold mb-6">
                R${product.price.toFixed(2)}
                <span className="text-[14px] ml-1">(-10%)</span>
              </p>
              <Count />
              <AddToCartButton
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                quantity={1}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Produto não encontrado</p>
      )}
    </>
  );
}
