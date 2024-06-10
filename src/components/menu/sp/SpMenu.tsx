// スマホ用ハンバーガーメニュー

"use client";

import { useState } from "react";

import { CircleX } from "lucide-react";

import OpenButton from "./OpenButton";
import SpMenuView from "./SpMenuView";

export default function SpMenu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-end">
        {isOpen ? (
          <CircleX
            width={56}
            height={56}
            strokeWidth={1.3}
            stroke="#0d172f"
            className="z-20 fixed bottom-4 right-4"
            onClick={handleMenuOpen}
          />
        ) : (
          <OpenButton
            className="z-10 fixed bottom-4 right-4"
            onClick={handleMenuOpen}
          />
        )}
      </div>
      <SpMenuView className={isOpen ? "animate-fadeIn" : "hidden"} />
    </div>
  );
}
