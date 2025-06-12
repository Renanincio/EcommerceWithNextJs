import Link from "next/link";

export const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
        <h2 className="font-semibold text-gray-800 text-base">{title}</h2>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-gray-600">
        {links.map((text, i) => (
          <li key={i}>
            <Link href="/" className="hover:underline">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
