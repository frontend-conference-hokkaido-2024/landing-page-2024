// スマホ用ハンバーガーメニュー

"use client";

import { useState, useEffect } from "react";

import clsx from "clsx";
import { CircleX } from "lucide-react";

import OpenButton from "./OpenButton";
import SpMenuView from "./SpMenuView";

export default function SpMenu() {
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  // クライアントサイドでマウントされるまで何も表示しない
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div className="flex justify-end lg:hidden md:hidden">
        <OpenButton
          className={clsx(
            "z-10 fixed bottom-4 right-4",
            isOpen && "hidden"
          )}
          onClick={handleMenuOpen}
        />
        <CircleX
          width={56}
          height={56}
          strokeWidth={1.3}
          stroke="#0d172f"
          className={clsx(
            "z-20 fixed bottom-4 right-4",
            !isOpen && "hidden"
          )}
          onClick={handleMenuOpen}
        />
      </div>
      <SpMenuView className={isOpen ? "animate-fadeIn" : "hidden"} handleOpen={handleMenuOpen} />
    </>
  );
}
