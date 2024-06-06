// 汎用Titleタグ

import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  icon: ReactNode;
};

export default function Title({ children, icon }: TitleProps) {
  return (
    <h1 className="font-extrabold mb-8">
      <div className="flex items-center justify-center gap-2 font-bold text-3xl tracking-wider">
        {icon}
        {children}
      </div>
    </h1>
  );
}
