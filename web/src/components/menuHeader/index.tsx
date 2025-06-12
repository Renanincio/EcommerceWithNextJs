"use client";

import * as Popover from "@radix-ui/react-popover";
import { IoMenu } from "react-icons/io5";

import React, { useState } from "react";
import { categories } from "@/data/categoryData";
import { CategorySlideContent } from "./categorySlideContent";

export const MenuHeader = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const currentCategory = categories.find((c) => c.id === activeCategoryId);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          aria-label="Abrir menu de categorias"
          className="cursor-pointer"
        >
          <IoMenu className="text-[24px]" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="z-20 pl-8" sideOffset={5}>
          <div className="rounded min-w-[90vw] min-h-[400px] bg-white flex">
            <nav className="border-r-2 border-r-[#a7a9ac] w-[300px] h-full">
              <ul className="flex flex-col gap-6 p-4">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    onMouseOver={() => setActiveCategoryId(category.id)}
                    className={`flex gap-2 items-center cursor-pointer ${
                      category.id === activeCategoryId
                        ? "text-pinkPrimary"
                        : "text-[#a7a9ac]"
                    }`}
                  >
                    {React.createElement(
                      require("react-icons/fa6")[category.icon] ||
                        require("react-icons/io5")[category.icon] ||
                        require("react-icons/lu")[category.icon] ||
                        require("react-icons/pi")[category.icon] ||
                        require("react-icons/io")[category.icon] ||
                        IoMenu,
                      {
                        className: "text-[24px]",
                      }
                    )}
                    <p>{category.label}</p>
                  </li>
                ))}
              </ul>
            </nav>
            {currentCategory ? (
              <CategorySlideContent sections={currentCategory.sections} />
            ) : (
              <div className="flex items-center justify-center w-full">
                <p className="text-[#a7a9ac] text-center">
                  Não há produtos nesta categoria ainda!
                </p>
              </div>
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
