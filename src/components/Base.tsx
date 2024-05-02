import type { ReactNode } from "react";

import { LinkButton } from "./LinkButon";
import { Card } from "./ui/card";

import LinkMenu from "@/components/LinkMenu";
import SpMenu from "@/components/SpMenu";

type BaseProps = {
    children?: ReactNode
}

export default function Base({ children }: BaseProps) {
  return (
    <>
      <div className="fixed top-0 left-0 hidden md:block md:w-[calc((100%_-_360px)/4*3)] lg:w-[calc((100%_-_360px)/2)] h-dvh bg-gradient-to-b from-[rgba(66,102,245,0.5)] to-[rgba(245,66,182,0.5)]">
        {/* 左側エリア */}
        <Card className="flex items-center justify-center w-56 h-56 rounded-3xl mx-auto mt-20 bg-slate-50">
          <LinkMenu textClassName="text-[#2a0252]"/>
        </Card>
      </div>
      <div className="w-full max-w-[500px] md:w-[360px] h-dvh mx-auto place-items-center">
        {/* ここにSP用のタグとかを書いていく */}
        <SpMenu menu={<LinkMenu />}/>
        {children}
      </div>
      <div className="fixed top-0 right-0 hidden md:block md:w-[calc((100%_-_360px)/4*1)] lg:w-[calc((100%_-_360px)/2)] h-dvh bg-gradient-to-b from-[rgba(66,102,245,0.5)] to-[rgba(245,66,182,0.5)]">
        <Card className="flex items-center justify-center w-56 h-16 rounded-3xl mx-auto mt-20 bg-slate-50">
          <LinkButton href={{
            host: "fortee.jp/",
            pathname: "/frontend-conf-hokkaido-2024/speaker/proposal/cfp"
          }}>
            <span className="text-[#2a0252]">CfP募集中!!</span>
          </LinkButton>
        </Card>
        <Card className="flex items-center justify-center w-56 h-16 rounded-3xl mx-auto mt-20 bg-slate-50">
          <LinkButton href={{
            host: "fortee.jp/",
            pathname: "/frontend-conf-hokkaido-2024/sponsor/form"
          }}>
            <span className="text-[#2a0252]">スポンサー募集中!!</span>
          </LinkButton>
        </Card>
      </div>
    </>
  );
}