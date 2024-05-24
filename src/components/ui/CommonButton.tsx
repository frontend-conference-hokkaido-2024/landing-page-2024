import type { ReactNode } from "react";

import Image from "next/image";

type buttonProps = {
  background: string;
  lefticon: string | ReactNode;
  righticon: string | ReactNode;
  text: string;
};

const CommonButton: React.FC<buttonProps> = ({
  background,
  lefticon,
  righticon,
  text,
}) => {
  let lefticonElement: ReactNode;
  let righticonElement: ReactNode;

  if (typeof lefticon === "string") {
    lefticonElement = (
      <Image
        src={lefticon}
        width={18}
        height={18}
        alt="button icon"
        className="text-wite"
      />
    );
  } else {
    lefticonElement = lefticon;
  }
  if (typeof righticon === "string") {
    righticonElement = (
      <Image
        src={righticon}
        width={18}
        height={18}
        alt="button icon"
        className="text-wite"
      />
    );
  } else {
    lefticonElement = lefticon;
  }

  return (
    <button
      className={`w-full ${background} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      {lefticonElement}
      <span className="text-sm px-2.5 font-bold">{text}</span>
      {righticonElement}
    </button>
  );
};

export default CommonButton;
