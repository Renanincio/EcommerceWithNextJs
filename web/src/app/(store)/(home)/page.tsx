import { Brands } from "@/components/brands";
import { Cards } from "@/components/cards";
import { CategoryButton } from "@/components/categoryButton";
import { Slides } from "@/components/slides";
import { SliderPerView } from "@/components/sliderPerView";
import Image from "next/image";
import Link from "next/link";
import { CartProvider } from "@/contexts/cart-context/CartProvider";

export const metadata = {
  title: "Zishop - Loja Online",
};

export default async function Home() {
  const article = [
    {
      src: "/ul1.png",
      alt: "entrega expressa",
    },
    {
      src: "/ul2.png",
      alt: "pagamento no local",
    },
    {
      src: "/ul3.png",
      alt: "Suporte 24/7",
    },
    {
      src: "/ul4.png",
      alt: "Garantia de originalidade",
    },
  ];

  return (
    <>
      <CartProvider>
        <main className="min-h-screen flex flex-col">
          <Slides />
          <section className="flex my-[20px] w-full justify-around">
            {article.map((item, index) => (
              <article
                key={index}
                className="text-center flex flex-col items-center"
              >
                <Image
                  className="w-[75px] h-[75px]"
                  src={item.src}
                  width={100}
                  height={100}
                  alt={item.alt}
                />
                <p>{item.alt}</p>
              </article>
            ))}
          </section>

          <div className="bg-[#3CBECF] w-full justify-evenly rounded py-6 flex items-center h-[300px]">
            <div className="h-full flex flex-col justify-center">
              <p className="text-[24px] font-semibold mt-16">
                Ofertas especiais
              </p>
              <Link className="m-auto" href={"/"}>
                <button className="px-8 py-2 inset-0 bg-white/50 backdrop-blur-lg rounded font-semibold">
                  Veja tudo
                </button>
              </Link>
            </div>
            <SliderPerView />
          </div>

          <section className="w-full text-center">
            <h2 className="font-normal text-[34px] my-12">Categoria de bens</h2>
            <div className="grid grid-cols-3 grid-rows-2 w-full h-[300px] gap-4">
              <div className="col-span-1 row-span-2 rounded bg-[#ADE8F4] flex items-center justify-between gap-2 p-4">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold text-[20px]">
                    Produtos Digitais
                  </h2>
                  <p className="text-start">
                    Oferecemos os produtos mais novos aos preços mais
                    competitivos
                  </p>
                  <CategoryButton />
                </div>
                <Image
                  className="w-[125px] h-[150px] hover:scale-95 transition-all delay-75"
                  src="/category1.png"
                  width={250}
                  height={250}
                  alt=""
                />
              </div>
              <div className="col-span-1 row-span-2 rounded bg-[#FFDDD2] flex items-center justify-between gap-2 p-4">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold text-[20px]">Moda e Roupas</h2>
                  <p className="text-start">
                    As marcas mais populares com os preços mais razoáveis
                  </p>
                  <CategoryButton />
                </div>
                <Image
                  className="w-[140px] h-[140px] hover:scale-95 transition-all delay-75"
                  src="/category2.png"
                  width={250}
                  height={250}
                  alt=""
                />
              </div>
              <div className="col-span-1 row-span-1 rounded bg-[#DDD92A] flex items-center justify-between gap-2 p-4">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold text-[20px]">Moda e Roupas</h2>
                  <p className="text-start">
                    As marcas mais populares com os preços mais razoáveis
                  </p>
                  <CategoryButton />
                </div>
                <Image
                  className="w-[80px] h-[80px] hover:scale-95 transition-all delay-75"
                  src="/category3.png"
                  width={250}
                  height={250}
                  alt=""
                />
              </div>
              <div className="col-span-1 row-span-1 rounded bg-[#DDD92A] flex items-center justify-between gap-2 p-4">
                <Image
                  className="w-[125px] h-[130px] hover:scale-95 transition-all delay-75"
                  src="/category4.png"
                  width={250}
                  height={250}
                  alt=""
                />
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold text-[20px]">Moda e Roupas</h2>
                  <p className="text-start">
                    As marcas mais populares com os preços mais razoáveis
                  </p>
                  <CategoryButton />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 w-full h-[300px] gap-4 mt-6">
              <div className="col-span-2 row-span-2 rounded bg-[#CCD5AE] flex items-center justify-between gap-2 p-4">
                <div className="flex flex-col items-start gap-2">
                  <h2 className="font-semibold text-[20px]">
                    Móveis e cozinha
                  </h2>
                  <p className="text-start">
                    De acordo com os desígnios da época
                  </p>
                  <CategoryButton />
                </div>
                <Image
                  className="w-[275px] h-[225px] hover:scale-95 transition-all delay-75"
                  src="/category5.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
              <div className="col-span-1 row-span-2 rounded bg-[#CCE3DE] flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <h2 className="font-semibold text-[20px]">
                    Brinquedos e Bebê
                  </h2>
                  <p className="text-center">
                    Uma combinação de entretenimento e criatividade
                  </p>
                  <CategoryButton />
                </div>
                <Image
                  className="w-[125px] h-[100px] hover:scale-95 transition-all delay-75"
                  src="/category6.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <div className="col-span-1 row-span-2 rounded bg-[#FBB13C] flex items-center justify-between gap-2 p-4">
                <div className="flex flex-col items-start w-[150px] gap-2">
                  <h2 className="font-semibold text-[20px]">
                    Livros, Papelaria e Arte
                  </h2>
                  <p className="text-start">Variedade na escolha</p>
                  <Link href={"/"}>
                    <button className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-2 w-full text-white ">
                      Ver todos os produtos
                    </button>
                  </Link>
                </div>
                <Image
                  className="w-[75px] h-[200px] hover:scale-95 transition-all delay-75"
                  src="/category7.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="w-full text-center">
            <h2 className="font-normal text-[34px] my-12">
              Produtos mais novos
            </h2>
            <div>
              <Cards />
            </div>
            <Link href={"/"}>
              <button className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-2 w-[250px] text-white mt-8">
                Ver todos os novos produtos
              </button>
            </Link>
          </section>

          <section className="w-full min-h-[300px]">
            <h2 className="font-normal text-[34px] my-12 text-center">
              Venda especial
            </h2>
            <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full h-[300px]">
              <div className="col-span-1 row-span-1 bg-[#F1EEE9] rounded flex items-center justify-end overflow-hidden">
                <div className="flex flex-col items-start gap-4 absolute z-10 w-[300px] justify-self-start mr-[250px]">
                  <h2 className="font-semibold text-[20px]">Móveis Larissa</h2>
                  <p className="text-start">
                    lindo sofá Larissa com seu design privativo pode dar uma
                    beleza única à decoração da sua recepção.
                  </p>
                  <Link href={"/"}>
                    <button className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-2 px-4 text-white m-auto">
                      Ver produto
                    </button>
                  </Link>
                </div>
                <div
                  style={{ backgroundImage: `url('/sales1.jpg')` }}
                  className="w-[250px] h-full hover:scale-110 transition-all duration-1000 bg-cover bg-no-repeat bg-right"
                />
              </div>
              <div className="col-span-1 row-span-1 bg-[#D0CAB4] rounded flex items-center justify-end overflow-hidden">
                <div className="flex flex-col items-start gap-4 absolute z-10 w-[300px] justify-self-start mr-[250px]">
                  <h2 className="font-semibold text-[20px]">Móveis Romanos</h2>
                  <p className="text-start">
                    O sofá Romano tem uma beleza impressionante e pode
                    multiplicar o charme da decoração da sua casa.
                  </p>
                  <Link href={"/"}>
                    <button className="bg-[#A71B4A] hover:scale-105 transition-all duration-150 rounded py-2 px-4 text-white m-auto">
                      Ver produto
                    </button>
                  </Link>
                </div>
                <div
                  style={{ backgroundImage: `url('/sales2.jpg')` }}
                  className="w-[250px] h-full hover:scale-110 transition-all duration-1000 bg-cover bg-no-repeat bg-right"
                />
              </div>
            </div>
          </section>

          <section className="w-full">
            <h2 className="font-normal text-[34px] my-12 text-center">
              Marcas populares
            </h2>
            <Brands />
          </section>
        </main>
      </CartProvider>
    </>
  );
}
