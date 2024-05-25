import type { ReactNode } from "react";

import Image from "next/image";

type buttonProps = {
  background?: string;
  lefticon?:  ReactNode;
  righticon?: ReactNode;
  children?: string;
};

function CommonButton({
  background,
  lefticon,
  righticon,
  children,
}: buttonProps) {
  const lefticonElement = (
    <Image
      src={lefticon}
      width={18}
      height={18}
      alt="button icon"
      className="text-wite"
    />
  );
  const righticonElement = (
    <Image
      src={righticon}
      width={18}
      height={18}
      alt="button icon"
      className="text-wite"
    />
  );
  if (!background) {
    background = "black";
  }

  return (
    <button
      className={`w-full ${background} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      {lefticonElement}
      <span className="text-sm px-2.5 font-bold">{children}</span>
      {righticonElement}
    </button>
  );
}

export default CommonButton;
