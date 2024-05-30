// メニューのコンテンツリスト

"use client";

import clsx from "clsx";
import Link from "next/link";

import { Button } from "../ui/button";

import type { ButtonProps } from "../ui/button";

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

type MenuListProps = {
  color?: string;
}

export default function MenuList({ color = "white" }: MenuListProps) {
  const textColor = `text-${color}`;
  const borderColor = `border-${color}`;

  const MenuButton = ({ children, className, ...props }: ButtonProps) => {
    return <Button variant="link" className={clsx("text-bold text-base px-0", textColor, className)} {...props}>{children}</Button>;
  };

  return (
    <div className="flex flex-col items-start w-fit">
      <MenuButton onClick={() => scrollToSection("event-over-view")}>開催概要</MenuButton>
      <MenuButton onClick={() => scrollToSection("access")}>会場アクセス</MenuButton>
      <MenuButton onClick={() => scrollToSection("online-streaming")}>オンライン配信</MenuButton>
      <MenuButton onClick={() => scrollToSection("sponsor")}>スポンサー</MenuButton>
      <MenuButton onClick={() => scrollToSection("core-staff")}>スタッフ</MenuButton>
      <MenuButton asChild>
        <Link href={{pathname: "job-board"}}>
          ジョブボード
        </Link>
      </MenuButton>

      <hr className={clsx("border w-full my-2", borderColor)} />

      <MenuButton asChild>
        <Link href="https://fortee.jp/frontend-conf-hokkaido-2024/timetable" target="_blank" rel="noopener noreferrer">
          タイムテーブル
        </Link>
      </MenuButton>
      <MenuButton asChild>
        <Link href="https://note.com/fec_hokkaido" target="_blank" rel="noopener noreferrer">
          スタッフブログ</Link>
      </MenuButton>

      <hr className={clsx("border w-full my-2", borderColor)} />

      <MenuButton asChild>
        <Link href="https://aback-jasmine-06b.notion.site/1f09ab38bf594ab689b244fec8f1ac46" target="_blank" rel="noopener noreferrer">
          行動規範</Link>
      </MenuButton>
      <MenuButton asChild>
        <Link href="https://www.local.or.jp/about/tokushohou" target="_blank" rel="noopener noreferrer">
          特定商取引法に基づく表記
        </Link>
      </MenuButton>
      <MenuButton asChild>
        <Link href="https://aback-jasmine-06b.notion.site/cf184497a6414a97aea49c1f1b2f5b5f" target="_blank" rel="noopener noreferrer">
          プライバシーポリシー
        </Link>
      </MenuButton>
    </div>
  );
}
