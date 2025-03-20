"use client";

import * as Popover from "@radix-ui/react-popover";
import { IoMenu } from "react-icons/io5";
import "./styles.css";
import { FaLaptop } from "react-icons/fa6";
import {
  IoShirtOutline,
  IoCarSportOutline,
  IoHomeOutline,
} from "react-icons/io5";
import { LuHeartPulse } from "react-icons/lu";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoMdBook } from "react-icons/io";
import { useState } from "react";

export const MenuHeader = () => {
  const [slide, setSlide] = useState(1);
  return (
    <>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className="cursor-pointer"
            aria-label="Update dimensions"
          >
            <IoMenu className="text-[24px]" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="z-20 pl-8" sideOffset={5}>
            <div className="rounded min-w-[90vw] min-h-[400px] bg-white flex">
              <div className="border-r-2 border-r-[#a7a9ac] w-[300px] h-full">
                <ul className="flex flex-col gap-6 p-4">
                  <li
                    onClick={() => setSlide(1)}
                    onMouseOver={() => setSlide(1)}
                    className="flex gap-2 items-center"
                  >
                    <FaLaptop className="text-[24px]" />
                    <p>Digital</p>
                  </li>
                  <li
                    onClick={() => setSlide(2)}
                    onMouseOver={() => setSlide(2)}
                    className="flex gap-2 items-center"
                  >
                    <IoShirtOutline className="text-[24px]" />
                    <p>modas e roupas</p>
                  </li>
                  <li
                    onClick={() => setSlide(3)}
                    onMouseOver={() => setSlide(3)}
                    className="flex gap-2 items-center"
                  >
                    <IoCarSportOutline className="text-[24px]" />
                    <p className="text-[#a7a9ac]">Brinquedos e bebês</p>
                  </li>
                  <li
                    onClick={() => setSlide(3)}
                    onMouseOver={() => setSlide(3)}
                    className="flex gap-2 items-center"
                  >
                    <LuHeartPulse className="text-[24px]" />
                    <p className="text-[#a7a9ac]">Cosmésticos</p>
                  </li>
                  <li
                    onClick={() => setSlide(3)}
                    onMouseOver={() => setSlide(3)}
                    className="flex gap-2 items-center"
                  >
                    <IoHomeOutline className="text-[24px]" />
                    <p className="text-[#a7a9ac]">Móveis e cozinha</p>
                  </li>
                  <li
                    onClick={() => setSlide(3)}
                    onMouseOver={() => setSlide(3)}
                    className="flex gap-2 items-center"
                  >
                    <PiSoccerBallFill className="text-[24px]" />
                    <p className="text-[#a7a9ac]">Esporte e viagem</p>
                  </li>
                  <li
                    onClick={() => setSlide(3)}
                    onMouseOver={() => setSlide(3)}
                    className="flex gap-2 items-center"
                  >
                    <IoMdBook className="text-[24px]" />
                    <p className="text-[#a7a9ac]">Livros, papelaria e arte</p>
                  </li>
                </ul>
              </div>
              <div className="w-full">
                {slide == 1 && (
                  <>
                    <div className="flex flex-col gap-4 p-6">
                      <div>
                        <p>Ver todos os produtos nesta categoria</p>
                      </div>
                      <div className="grid grid-cols-3 grid-rows-2">
                        <ul className="flex flex-col gap-3 col-span-1 row-span-2">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">
                              Laptop e Acessórios
                            </h2>
                          </div>
                          <li>Asus</li>
                          <li>Apple</li>
                          <li>Dell</li>
                          <li>Lenovo</li>
                          <li>Samsung</li>
                          <li>HP</li>
                          <li>HUAWEI</li>
                          <li>Acer</li>
                          <li>MSI</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-2">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">
                              Celulare Acessórios
                            </h2>
                          </div>
                          <li>Samsung</li>
                          <li>Apple</li>
                          <li>Nokia</li>
                          <li>Xiaomi</li>
                          <li>Motorola</li>
                          <li>Lg</li>
                          <li>Sony</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-1">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">
                              Computados e Acessórios
                            </h2>
                          </div>
                          <li>Mouse</li>
                          <li>Teclado</li>
                          <li>Disco Rígido, memória RAM e SSD</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-1">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">Outros</h2>
                          </div>
                          <li>Comprimido</li>
                          <li>Banco de potência</li>
                          <li>Alto-falante Bluetooth e fio</li>
                          <li>Fone de ouvido, headset e viva-voz</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {slide == 2 && (
                  <>
                    <div className="flex flex-col gap-4 p-6">
                      <div>
                        <p>Ver todos os produtos nesta categoria</p>
                      </div>
                      <div className="grid grid-cols-3 grid-rows-2">
                        <ul className="flex flex-col gap-3 col-span-1 row-span-2">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">Moda Feminina</h2>
                          </div>
                          <li>Vestido</li>
                          <li>Saia</li>
                          <li>Jeans</li>
                          <li>Calça</li>
                          <li>Camiseta</li>
                          <li>Sapato</li>
                          <li>Lenço</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-2">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">Moda Masculina</h2>
                          </div>
                          <li>Camisa</li>
                          <li>Calça</li>
                          <li>Gravata</li>
                          <li>Camiseta</li>
                          <li>Sapato</li>
                          <li>Jeans</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-1">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">Moda infantil</h2>
                          </div>
                          <li>Macacão</li>
                          <li>Luvas</li>
                          <li>Avental de bebê</li>
                          <li>Sapato</li>
                          <li>Camiseta</li>
                        </ul>
                        <ul className="flex flex-col gap-3 col-span-1 row-span-1">
                          <div className="flex items-center gap-2">
                            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
                            <h2 className="font-semibold">Outros</h2>
                          </div>
                          <li>Assistir</li>
                          <li>Carteira</li>
                          <li>Chapéu</li>
                          <li>Cinto</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                {slide == 3 && (
                  <>
                    <div className="flex items-center justify-center h-full w-full">
                      <p className="text-[#a7a9ac] text-center">
                        Não há produtos nesta categoria ainda! Novos produtos
                        serão adicionados em breve.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};
