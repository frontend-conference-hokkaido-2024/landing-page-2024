// スマホ用ハンバーガーメニュー

"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { Menu, X } from "lucide-react";

type SpMenuProps = {
  menu: ReactNode;
};

export default function SpMenu({ menu }: SpMenuProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-end">
        {isOpen ? (
          <X
            strokeWidth={1.3}
            stroke="#4b5563"
            className="fixed w-10 h-10 z-10 md:hidden lg:hidden mr-3 mt-3"
            onClick={handleMenuOpen}
          />
        ) : (
          <Menu
            strokeWidth={1.3}
            stroke="#4b5563"
            className="absolute w-10 h-10 z-10 md:hidden lg:hidden mr-3 mt-3"
            onClick={handleMenuOpen}
          />
        )}
      </div>
      <div
        className={
          isOpen
            ? "fixed w-full h-full flex justify-center items-center bg-gradient-to-b from-white via-white to-gray-200 animate-fadeIn"
            : "hidden"
        }
      >
        {menu}
      </div>
    </>
  );
}
