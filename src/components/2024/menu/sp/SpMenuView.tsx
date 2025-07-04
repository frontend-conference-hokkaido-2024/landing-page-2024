"use client";

import clsx from "clsx";
import Image from "next/image";

import MenuList from "../MenuList";

type SpMenuProps = {
  className?: string;
  handleOpen?: () => void;
};

export default function SpMenuView({ className, handleOpen }: SpMenuProps) {
  return (
    <div className={clsx("z-10 fixed flex items-center justify-center w-full h-full bg-ivory", className)}>
      <div className="w-3/4 flex flex-col items-center gap-5 mb-6 relative">
        <Image
          src="images/2024/Icon/icon_owl.png"
          alt=""
          width={72}
          height={72}
          className="object-contain absolute top-0 -left-8 -rotate-[16deg]"
        />
        <Image
          src="images/2024/Icon/icon_fox.png"
          alt=""
          width={72}
          height={72}
          className="object-contain absolute top-20 -right-5 rotate-[15deg]"
        />
        <MenuList color="black" handleOpen={handleOpen} />
      </div>
    </div>
  );
}