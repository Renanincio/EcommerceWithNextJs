import Link from "next/link";

interface SalesCardProps {
  title: string;
  description: string;
  imageUrl: string;
  background: string;
}

export const SalesCard = ({ title, description, imageUrl, background }: SalesCardProps) => {
  return (
    <div className={`col-span-1 row-span-1 ${background} rounded flex items-center justify-end overflow-hidden`}>
      <div className="flex flex-col items-start gap-4 absolute z-10 w-[300px] justify-self-start mr-[250px]">
        <h3 className="font-semibold text-[20px]">{title}</h3>
        <p className="text-start">
          {description}
        </p>
        <Link href={"/"}>
          <button className="bg-pinkPrimary hover:scale-105 transition-all delay-75 rounded py-2 px-4 text-white m-auto">
            Ver produto
          </button>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="w-[250px] h-full hover:scale-110 transition-all duration-1000 bg-cover bg-no-repeat bg-right"
      />
    </div>
  );
};
