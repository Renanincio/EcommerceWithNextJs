import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";

export const FooterSocial = () => {
  const socialLinks = [
    { icon: <AiFillInstagram />, label: "Instagram", href: "/" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "/" },
    { icon: <FaTwitterSquare />, label: "Twitter", href: "/" },
    { icon: <FaTelegramPlane />, label: "Telegram", href: "/" },
  ];
  return (
    <section className="flex flex-col gap-4 justify-center max-w-sm">
      <p className="text-gray-700 font-medium">Esteja conosco!</p>
      <ul className="flex gap-3 items-center text-2xl text-gray-500">
        {socialLinks.map(({ icon, href, label }, i) => (
          <li key={i}>
            <Link
              href={href}
              aria-label={label}
              className="hover:text-gray-800 transition-colors"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-700">
        Mantenha-se atualizado com os últimos descontos enviando-nos um e-mail
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          E-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Por favor, insira seu e-mail!"
          className="bg-[#E1E4E7] p-3 rounded sm:rounded-l w-full sm:w-[280px] text-sm placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-pinkPrimary text-white px-6 py-2 rounded sm:rounded-r text-sm hover:brightness-105 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
