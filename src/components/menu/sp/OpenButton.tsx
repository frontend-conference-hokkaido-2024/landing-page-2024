import type { ComponentProps } from "react";

import clsx from "clsx";



export default function OpenButton({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={clsx("w-14 h-14 bg-neutral-950 rounded-full text-white font-bold text-sm hover:bg-opacity-80 transition duration-200 focus:outline-none", className)}
      {...props}
    >
      MENU
    </button>
  );
}