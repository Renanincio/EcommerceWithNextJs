import { Brands } from "./brands";

export const PopularBrands = () => {
  return (
    <section className="w-full">
      <h2 className="font-normal text-[34px] my-12 text-center">
        Marcas populares
      </h2>
      <Brands />
    </section>
  );
};
