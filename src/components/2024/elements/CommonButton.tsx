import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

type buttonProps = {
  background?: string;
  asChild?: boolean;
} & ComponentProps<"button">;

const CommonButton = forwardRef<HTMLButtonElement, buttonProps>(({
  background = "bg-black",
  className,
  asChild = false,
  ...props
}: buttonProps,
  ref
) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "w-full text-white rounded-full px-4 py-2.5 flex items-center justify-center hover:bg-opacity-80 transition duration-200 focus:outline-none text-sm font-bold",
        background,
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
CommonButton.displayName = "Button";

export default CommonButton;