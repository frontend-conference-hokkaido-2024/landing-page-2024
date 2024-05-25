// PC画面用メニュー
import clsx from "clsx";

import ExternalLinkIcon from "./ExternalLinkIcon";
import { LinkButton } from "./LinkButon";

type LinkMenuProps = {
  textClassName?: string;
  className?: string;
};

export default function LinkMenu({ className, textClassName }: LinkMenuProps) {
  return (
    <div className={clsx("bg-transparent flex flex-col gap-2 w-32", className)}>
      <LinkButton href="https://fortee.jp/frontend-conf-hokkaido-2024/proposal/all">
        <span className={clsx("flex", textClassName)}>
          TALKS
          <ExternalLinkIcon />
        </span>
      </LinkButton>
      <LinkButton href="https://fortee.jp/frontend-conf-hokkaido-2024/timetable">
        <span className={clsx("flex", textClassName)}>
          TIMETABLE
          <ExternalLinkIcon />
        </span>
      </LinkButton>
      <LinkButton
        href={{
          pathname: "/jobboard",
        }}
        disabled
      >
        <span
          className={clsx("font-black text-lg pl-4 italic text-[#2a025286]")}
        >
          JOB BOARD
        </span>
      </LinkButton>
      <LinkButton href="https://aback-jasmine-06b.notion.site/cf184497a6414a97aea49c1f1b2f5b5f">
        <span className={clsx("flex", textClassName)}>
          POLICY
          <ExternalLinkIcon />
        </span>
      </LinkButton>
      <LinkButton href="https://note.com/fec_hokkaido">
        <span className={clsx("flex", textClassName)}>
          STAFF BLOG
          <ExternalLinkIcon />
        </span>
      </LinkButton>
      <LinkButton href="https://twitter.com/fec_hokkaido">
        <span className={clsx("flex", textClassName)}>
          OFFICIAL 𝕏
          <ExternalLinkIcon />
        </span>
      </LinkButton>
    </div>
  );
}
