import type { ReactNode } from "react";

import Image from "next/image";

type buttonProps = {
  background?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  children?: string;
};

const CommonButton: React.FC<buttonProps> = ({
  background,
  lefticon,
  righticon,
  children,
}) => {
  const leftElement = (
    <Image
      src={lefticon}
      width={18}
      height={18}
      alt="button icon"
      className="text-wite"
    />
  );
  const rightElement = (
    <Image
      src={righticon}
      width={18}
      height={18}
      alt="button icon"
      className="text-wite"
    />
  );
  return (
    <button
      className={`w-full ${background} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      {leftElement}
      <span className="text-sm px-2.5 font-bold">{children}</span>
      {rightElement}
    </button>
  );
};

export default CommonButton;
