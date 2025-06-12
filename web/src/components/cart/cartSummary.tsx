import { useCheckout } from "@/hooks/useCheckout";

type Props = {
  quantidadeTotal: number;
  valorTotal: number;
};

export const CartSummary = ({ quantidadeTotal, valorTotal }: Props) => {
  const { handleCheckout } = useCheckout();
  return (
    <aside className="ml-2 self-end shadow-md rounded-lg bg-white/50 backdrop-blur-lg w-[350px] h-[300px] p-8 mb-8">
      <h2 className="text-[24px] font-semibold">Resumo do pedido</h2>
      <div className="mt-8">
        <p className="text-[16px] font-medium">
          Quantidade total: {quantidadeTotal}
        </p>
        <p className="text-[20px] font-medium mb-6">
          Valor total: R${" "}
          {valorTotal.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-pinkPrimary text-white py-2 rounded-lg hover:bg-[#792541] transition-colors text-center cursor-pointer"
      >
        Finalizar compra
      </button>
    </aside>
  );
};
