import Link from "next/link";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex border-b-[#E1E4E7] border-y-2 items-baseline py-6 justify-between">
      <ul className="flex flex-col gap-3">
        <li>
          <div className="flex items-center gap-2">
            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
            <h2 className="font-semibold">Mapa Zishop</h2>
          </div>
        </li>
        <li>Sobre nós</li>
        <li>Contate-nos</li>
        <li>Venda em Zishop</li>
        <li>Oportunidades de carreira</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>
          <div className="flex items-center gap-2">
            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
            <h2 className="font-semibold">Atendimento ao cliente</h2>
          </div>
        </li>
        <li>Perguntas frequentes</li>
        <li>Procedimentos de devolução</li>
        <li>Privacidade</li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>
          <div className="flex items-center gap-2">
            <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
            <h2 className="font-semibold">Guia de compras</h2>
          </div>
        </li>
        <li>Como fazer um pedido?</li>
        <li>Procedimento de envio de pedidos</li>
        <li>Métodos de pagamento</li>
      </ul>
      <div className="flex flex-col gap-4 justify-center">
        <p>Esteja conosco!</p>
        <ul className="flex gap-2 items-center">
          <Link href="/">
            <li className="text-[#888a8b] text-[32px] hover:text-[#424750] transition-all delay-75">
              <AiFillInstagram />
            </li>
          </Link>
          <Link href="/">
            <li className="text-[#888a8b] text-[32px] hover:text-[#424750] transition-all delay-75">
              <FaLinkedin />
            </li>
          </Link>
          <Link href="/">
            <li className="text-[#888a8b] text-[32px] hover:text-[#424750] transition-all delay-75">
              <FaTwitterSquare />
            </li>
          </Link>
          <Link href="/">
            <li className="text-[#888a8b] text-[32px] hover:text-[#424750] transition-all delay-75">
              <FaTelegramPlane />
            </li>
          </Link>
        </ul>
        <p>
          Mantenha-se atualizado com os últimos descontos enviando-nos um e-mail
        </p>
        <form>
          <input
            type="email"
            placeholder="Por favor, insira seu e-mail!"
            className="bg-[#E1E4E7] w-[420px] h-[28px] p-4 rounded-tl rounded-bl"
          />
          <button
            type="submit"
            className="bg-[#A71B4A] text-white px-6 h-[48px] rounded-br rounded-tr mt-2"
          >
            Enviar
          </button>
        </form>
      </div>
    </footer>
  );
};
