// 段落用タグ

import type { ComponentProps, ReactNode } from "react";

import { clsx } from "clsx";

type TextSizeScheme = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

type TextSizeSchemeProps = {
  [key in TextSizeScheme]: string;
};

const TextSizeSchemeData: TextSizeSchemeProps = {
  "xs": "indent-3 text-xs",
  "sm": "indent-3.5 text-sm",
  "base": "indent-4 text-base",
  "lg": "indent-4.5 text-lg",
  "xl": "indent-5 text-xl",
  "2xl": "indent-6 text-2xl",
};

type ParagraphProps = {
  children: ReactNode;
  textSize?: TextSizeScheme;
} & ComponentProps<"p">

export default function Paragraph({ children, className, textSize = "sm", ...props }: ParagraphProps) {
  return (
    <p className={clsx("text-left tracking-wider leading-extraRelaxed", className, TextSizeSchemeData[textSize])} {...props}>
      {children}
    </p>
  );
}
