import Link from "next/link";
import React from "react";

interface ButtonPrimaryProps {
  content: string;
  path: string | undefined;
}

export const ButtonPrimary = ({content, path="/"}: ButtonPrimaryProps) => {
  return (
    <Link href={path}>
    <button className="bg-[#A71B4A] hover:scale-105 transition-all delay-75 rounded py-2 w-[250px] text-white mt-8">
      {content}
    </button>
    </Link>
  );
};
