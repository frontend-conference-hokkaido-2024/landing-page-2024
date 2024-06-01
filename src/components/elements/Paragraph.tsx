// 汎用pタグ

import type { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

type ParagraphProps = {
  children: ReactNode;
  indent?: boolean;
} & ComponentProps<"p">

export default function Paragraph({ children, className, indent=true, ...props }: ParagraphProps) {
  return (
    <p className={clsx("text-left text-sm tracking-wider leading-extraRelaxed",indent? "indent-3" : null , className)} {...props}>
      {children}
    </p>
  );
}
