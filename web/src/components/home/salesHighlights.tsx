import { SalesCard } from "./salesCard";

export const SalesHighlights = () => {
  return (
    <section className="w-full min-h-[300px]">
      <h2 className="font-normal text-[34px] my-12 text-center">
        Venda especial
      </h2>
      <div className="grid grid-cols-2 grid-rows-1 gap-4 w-full h-[300px]">
        <SalesCard
          title="Móveis Larissa"
          description="Lindo sofá Larissa com seu design privativo pode dar uma beleza única à decoração da sua recepção."
          imageUrl="/sales1.jpg"
          background="bg-[#F1EEE9]"
        />
        <SalesCard
          title="Móveis Romanos"
          description="O sofá Romano tem uma beleza impressionante e pode multiplicar o charme da decoração da sua casa."
          imageUrl="/sales2.jpg"
          background="bg-[#D0CAB4]"
        />
      </div>
    </section>
  );
};
