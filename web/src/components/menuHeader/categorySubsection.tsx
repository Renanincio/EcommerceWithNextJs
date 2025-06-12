interface Props {
  title: string;
  items: string[];
}

export const CategorySubsection = ({ title, items }: Props) => (
  <ul className="flex flex-col gap-3 col-span-1">
    <div className="flex items-center gap-2">
      <div className="w-[3px] h-[24px] bg-[#A71B4A]" />
      <h2 className="font-semibold">{title}</h2>
    </div>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);