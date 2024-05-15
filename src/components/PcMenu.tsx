//  PC画面メニュー

import { LinkButton } from "./LinkButon";

import type { MenuButtonProps } from "menu";

import { MENU_CONTENTS } from "@/const/menuContents";

export default function PcMenu() {
  return(
    <div className="bg-transparent flex flex-col gap-2 w-32">
    {
        MENU_CONTENTS.map((content: MenuButtonProps, index: number) => <LinkButton key={index} href={content.href}>{content.title}</LinkButton> )
    }
</div>
  );
}
