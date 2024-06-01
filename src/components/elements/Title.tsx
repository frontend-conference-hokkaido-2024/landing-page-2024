// 汎用Titleタグ

import type { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  icon: ReactNode;
}

export default function Title({children, icon}: TitleProps) {
  return(
    <div className="flex items-center justify-center gap-2 font-bold text-3xl">
      {icon}{children}
    </div>
  );
}
