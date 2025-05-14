"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const SlidesProps = [
  {
    title: "Beleza e conforto",
    text: "Você encontrará os melhores tecidos, os designs mais quentes e as marcas mais populares a preços razoàveis. Vista-se da melhor forma possível e destaque-se na multidão.",
    imageUrl: "image2.jpg",
  },
  {
    title: "Tenha as melhores experiências",
    text: "Nós fornecemos a melhor experiência com as marcas mais populares. Com uma garantia de 18 meses, você pode estar confiante em sua escolha.",
    imageUrl: "image3.png",
  },
  {
    title: "Variedade na escolha",
    text: "Quando se trata de beleza e eficiência, somos especializados em fornecer artigos de papelaria e conjuntos de escritório que são lindos e de alta qualidade.",
    imageUrl: "image1.jpg",
  },
  {
    title: "Entretenimento e o crescimento da criatividade",
    text: "Produtos com a melhor qualidade e antialérgicos para criar momentos felizes",
    imageUrl: "image4.jpg",
  },
];

export const Slides = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      <Swiper
        rewind={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Vincula os botões ao Swiper depois da inicialização
          // Isso evita que o Swiper tente buscar elementos que ainda não existem
          // no momento da renderização
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={900}
        modules={[Navigation, Autoplay]}
        className="w-full h-[500px] mt-[35px] text-[#424750]"
      >
        {SlidesProps.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            className="w-full min-h-full bg-cover bg-top bg-no-repeat"
          >
            <div className="relative w-[700px] mx-auto mt-[225px] h-[250px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded" />
              <div className="relative z-10 text-start p-8">
                <h2 className="text-3xl font-bold mb-6">{slide.title}</h2>
                <p className="text-lg">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          ref={prevRef}
          className="swiper-button-prev p-6 !text-pinkPrimary rounded-full text-4xl flex items-center justify-center bg-white absolute top-1/2 left-4 z-10 cursor-pointer -translate-y-1/2 shadow"
        >
          <span className="-mt-[4px] -ml-[4px]">&lt;</span>
        </div>
        <div
          ref={prevRef}
          className="swiper-button-next p-6 !text-pinkPrimary rounded-full text-4xl justify-center bg-white absolute top-1/2 right-2 z-10 cursor-pointer -translate-y-1/2 shadow"
        >
          <span className="-mt-[4px] -mr-[4px]">&gt;</span>
        </div>
      </Swiper>
    </div>
  );
};
