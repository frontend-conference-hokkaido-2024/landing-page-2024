import type { ComponentProps, ReactNode } from "react";
import { cloneElement, forwardRef, isValidElement } from "react";

import clsx from "clsx";

type buttonProps = {
  background?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  asChild?: boolean;
} & ComponentProps<"button">;

const CommonButton = forwardRef<HTMLButtonElement, buttonProps>(({
  background = "bg-black",
  lefticon,
  righticon,
  children,
  className,
  asChild = false,
  ...props
}: buttonProps,
  ref
) => {
  const combinedClassName = clsx(
    "w-full text-white rounded-full px-4 py-2.5 flex items-center justify-center hover:bg-opacity-80 transition duration-200 focus:outline-none",
    background,
    className
  );

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      className: combinedClassName,
      ...props
    },
      <>
        {lefticon}
        <span className="text-sm px-2.5 font-bold">
          {children.props.children}
        </span>
        {righticon}
      </>
    );
  }

  return (
    <button
      className={clsx(
        "w-full text-white rounded-full px-4 py-2.5 flex items-center justify-center hover:bg-opacity-80 transition duration-200 focus:outline-none",
        background,
        className
      )}
      ref={ref}
      {...props}
    >
      {lefticon}
      <span className="text-sm px-2.5 font-bold">
        {children}
      </span>
      {righticon}
    </button>
  );
});
CommonButton.displayName = "Button";

export default CommonButton;