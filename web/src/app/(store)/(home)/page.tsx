export const dynamic = "force-static";

import { CategoryGrid } from "@/components/home/categoryGrid";
import { SalesHighlights } from "@/components/home/salesHighlights";
import { SpecialOffer } from "@/components/home/specialOffer";
import { HomeBenefits } from "@/components/home/homeBenefits";
import { Slides } from "@/components/home/slides";
import { CartProvider } from "@/contexts/cart-context/CartProvider";
import { NewestProducts } from "@/components/home/newestProducts";
import { PopularBrands } from "@/components/home/popularBrands";

export const metadata = {
  title: "Zishop - Loja Online",
};

export default async function Home() {
  return (
    <>
      <CartProvider>
        <main className="min-h-screen flex flex-col">
          <Slides />
          <HomeBenefits />
          <SpecialOffer />
          <CategoryGrid />
          <NewestProducts />
          <SalesHighlights />
          <PopularBrands />
        </main>
      </CartProvider>
    </>
  );
}
