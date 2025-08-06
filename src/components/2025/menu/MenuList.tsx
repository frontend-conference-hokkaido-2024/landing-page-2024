// メニューのコンテンツリスト

"use client";

import clsx from "clsx";
import Link from "next/link";

import type { ButtonProps } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type ColorScheme = "white" | "black";

type ColorSchemeProps = {
  [key in ColorScheme]: {
    text: string;
    border: string;
  };
};

const colorSchemeData: ColorSchemeProps = {
  white: {
    text: "text-white",
    border: "border-white",
  },
  black: {
    text: "text-black",
    border: "border-black",
  },
};

type MenuListProps = {
  color?: ColorScheme;
  className?: string;
  handleOpen?: () => void; // SpMenu開閉用関数
};

export default function MenuList({
  color = "white",
  className,
  handleOpen,
}: MenuListProps) {
  const currentColor = colorSchemeData[color];

  const MenuButton = ({ children, className, ...props }: ButtonProps) => {
    return (
      <Button
        variant="link"
        className={clsx(
          "font-bold text-base px-0",
          currentColor.text,
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  };

  return (
    <div className={clsx("flex flex-col items-start w-fit", className)}>
      <MenuButton>
        <a href="/#overview" onClick={handleOpen}>
          開催概要
        </a>
      </MenuButton>
      <MenuButton>
        <a href="/#access" onClick={handleOpen}>
          会場アクセス
        </a>
      </MenuButton>
      <MenuButton>
        <a href="/#sponsor" onClick={handleOpen}>
          スポンサー
        </a>
      </MenuButton>
      <MenuButton>
        <a href="/#coreStaff" onClick={handleOpen}>
          スタッフ
        </a>
      </MenuButton>
      <MenuButton asChild>
        <Link href={{ pathname: "/job-board" }} onClick={handleOpen}>
          ジョブボード
        </Link>
      </MenuButton>

      <Separator className={clsx("border w-full my-2", currentColor.border)} />

      <MenuButton asChild>
        <Link
          href="https://fortee.jp/frontend-conf-hokkaido-2025/timetable"
          target="_blank"
          rel="noopener noreferrer"
        >
          タイムテーブル
        </Link>
      </MenuButton>
      <MenuButton asChild>
        <Link
          href="https://note.com/fec_hokkaido"
          target="_blank"
          rel="noopener noreferrer"
        >
          スタッフブログ
        </Link>
      </MenuButton>

      <Separator className={clsx("border w-full my-2", currentColor.border)} />

      <MenuButton asChild>
        <Link
          href="https://esa-pages.io/p/sharing/22435/posts/13/3a8f7d0dddaeb2ea656e.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          行動規範
        </Link>
      </MenuButton>
      {/* <MenuButton asChild>
        <Link
          href="https://www.local.or.jp/about/tokushohou"
          target="_blank"
          rel="noopener noreferrer"
        >
          特定商取引法に基づく表記
        </Link>
      </MenuButton> */}
      <MenuButton asChild>
        <Link
          href="https://esa-pages.io/p/sharing/22435/posts/16/fa9327797c275684e463.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          プライバシーポリシー
        </Link>
      </MenuButton>

      <Separator className={clsx("border w-full my-2", currentColor.border)} />

      <MenuButton asChild>
        <Link href={{ pathname: "/2024" }} onClick={handleOpen}>
          2024
        </Link>
      </MenuButton>
    </div>
  );
}
