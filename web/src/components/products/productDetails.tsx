interface ProductDetailsProps {
  name: string;
  description: string;
  datasheet: { key: string; value: string }[];
}

export const ProductDetails = ({
  name,
  description,
  datasheet,
}: ProductDetailsProps) => {
  return (
    <section className="flex-1">
      <header className="border-b pb-2">
        <h1 className="text-[24px] font-bold capitalize">{name}</h1>
      </header>
      <div className="mt-4 space-y-3 w-[300px]">
        {datasheet.map((item, index) => (
          <p key={index} className="font-semibold text-slate-700 text-sm">
            {item.key} :{" "}
            <span className="text-slate-900 text-base">{item.value}</span>
          </p>
        ))}
      </div>
      <p className="mt-4 text-slate-700 text-sm w-[300px]">{description}</p>
    </section>
  );
};
