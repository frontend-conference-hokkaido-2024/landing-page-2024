import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

type buttonProps = {
  background?: ReactNode;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  children: ReactNode;
} & ComponentProps<"button">;

const CommonButton: React.FC<buttonProps> = ({
  background = "bg-black",
  lefticon,
  righticon,
  children,
}) => {
  return (
    <button
      className={clsx(
        "w-full text-white rounded-full px-4 py-2.5 flex items-center justify-center hover:bg-opacity-80 transition duration-200 focus:outline-none",
        background
      )}
    >
      {lefticon}
      <span className="text-sm px-2.5 font-bold">{children}</span>
      {righticon}
    </button>
  );
};

export default CommonButton;
