import type { ReactNode } from "react";

type BaseProps = {
    children?: ReactNode
}

export default function Base({ children }: BaseProps) {
  return (
    <>
      <div className="lg:flex items-center fixed top-0 left-0 hidden md:block md:w-[calc((100%_-_360px)/4*1)] lg:w-[calc((100%_-_768px)/2)] h-dvh">
        {/* 左側エリア */}
      </div>
      <div className="max-w-[500px] md:w-[360px] md:max-w-full lg:w-[768px] md:mx-auto lg:ml-auto h-dvh mx-auto place-items-center">
        {/* ここにSP用のタグとかを書いていく */}
        <div>
          {children}
        </div>
      </div>
      <div className="lg:flex items-center fixed top-0 right-0 hidden md:block md:w-[calc((100%_-_360px)/4*1)] lg:w-[calc((100%_-_768px)/2)] h-dvh">
        {/* 右側エリア */}
      </div>
    </>
  );
}