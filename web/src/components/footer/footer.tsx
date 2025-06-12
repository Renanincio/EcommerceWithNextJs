import { footerSections } from "@/data/footerSections";
import { FooterSection } from "./footerSection";
import { FooterSocial } from "./footerSocial";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-10 px-6 md:px-12 bg-white text-sm">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
          {footerSections.map((section, i) => (
            <FooterSection
              key={i}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <FooterSocial />
      </div>
    </footer>
  );
};
