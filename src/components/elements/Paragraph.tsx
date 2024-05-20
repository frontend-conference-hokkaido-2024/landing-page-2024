// 汎用pタグ

import type { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

type ParagraphProps = {
  children: ReactNode
} & ComponentProps<"p">

export default function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={clsx("text-left indent-3 text-sm tracking-wider leading-extraRelaxed", className)} {...props}>
      {children}
    </p>
  );
}
