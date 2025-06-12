import { CategorySubsection } from "./categorySubsection";


export const CategorySlideContent = ({ sections }: { sections: any[] }) => (
  <div className="flex flex-col gap-4 p-6 w-full">
    <p>Ver todos os produtos nesta categoria</p>
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      {sections.map((section, idx) => (
        <CategorySubsection key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  </div>
);