import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

type buttonProps = {
  background?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  children: ReactNode;
} & ComponentProps<"button">;

export default function CommonButton({
  background = "bg-black",
  lefticon,
  righticon,
  children,
  ...props
}: buttonProps) {
  return (
    <button
      className={clsx(
        "w-full text-white rounded-full px-4 py-2.5 flex items-center justify-center hover:bg-opacity-80 transition duration-200 focus:outline-none",
        background
      )}
      {...props}
    >
      {lefticon}
      <span className="text-sm px-2.5 font-bold">{children}</span>
      {righticon}
    </button>
  );
}
