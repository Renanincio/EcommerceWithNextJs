import { PriceCard } from "@/components/products/priceCard";
import { ProductActions } from "@/components/products/productActions";
import { ProductDetails } from "@/components/products/productDetails";
import { ProductImage } from "@/components/products/productImage";
import { fetchProductBySlug } from "@/services/product";
import { getImageSrcFromBlob } from "@/services/getImageSrcFromBlob";
import { Product } from "@/types/product";
import { Metadata } from "next";
import { formatDatasheet } from "@/services/formatDatasheet";
import { fetchFirstTenProducts } from "@/services/fetchFirstTenProducts";

export const dynamicParams = true;

interface ProductProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = await fetchFirstTenProducts();

  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductProps): Promise<Metadata> {
  const product = await fetchProductBySlug(params.slug);

  return {
    title: product?.name
      ? `${
          product.name.charAt(0).toUpperCase() + product.name.slice(1)
        } - ZiShop`
      : "ZiShop",
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const product: Product | null = await fetchProductBySlug(params.slug);

  if (!product) {
    return <p className="text-center py-12">Produto não encontrado</p>;
  }

  const formattedSpecs = formatDatasheet(product.datasheet);
  const imageBase64 = getImageSrcFromBlob(product.image);

  return (
    <main className="flex flex-col min-h-screen p-4">
      <header className="mb-4">
        <p className="w-[300px] font-medium text-[18px] capitalize mt-4">
          {product.category}
        </p>
      </header>

      <section className="flex w-full gap-8 mt-8">
        <aside className="flex flex-col gap-4">
          <ProductActions />
        </aside>

        <ProductImage src={imageBase64} alt={product.name} />

        <section className=" flex flex-1 space-y-4">
          <ProductDetails
            name={product.name}
            description={product.description}
            datasheet={formattedSpecs}
          />
          <PriceCard
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </section>
      </section>
    </main>
  );
}
