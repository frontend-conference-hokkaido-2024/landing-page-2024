import type { ReactNode } from "react";

import Image from "next/image";

type buttonProps = {
  background?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  children?: string;
};

function CommonButton({
  background,
  children,
  lefticon,
  righticon,
}: buttonProps) {
  return (
    <button
      className={`w-full ${background} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      <Image
        src={lefticon}
        width={18}
        height={18}
        alt="button icon"
        className="text-wite"
      />
      <span className="text-sm px-2.5 font-bold">{children}</span>
      <Image
        src={righticon}
        width={18}
        height={18}
        alt="button icon"
        className="text-wite"
      />
    </button>
  );
}

export default CommonButton;
