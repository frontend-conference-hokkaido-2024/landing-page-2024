// PC画面用メニュー
import clsx from "clsx";

import { LinkButton } from "./LinkButon";

type LinkMenuProps = {
    textClassName?: string;
    className?: string;
}

export default function LinkMenu({ className, textClassName }: LinkMenuProps) {

    return ( 
        <div className={clsx("bg-transparent flex flex-col gap-2 w-32", className)}>
            <LinkButton href={{
                host: "fortee.jp",
                pathname: "/frontend-conf-hokkaido-2024/proposal/all",
            }}><span className={textClassName}>TALKS</span></LinkButton>
            <LinkButton href={{
                host: "fortee.jp",
                pathname: "/frontend-conf-hokkaido-2024/timetable",
            }}><span className={textClassName}>TIMETABLE</span></LinkButton>
            <LinkButton href={{
                pathname: "/jobboard"
            }}
            disabled><span className={clsx("font-black text-lg justify-normal tex-center inline-flex items-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 h-10 px-4 py-2 italic text-[#2a025290]", textClassName)}>JOB BOARD</span></LinkButton>
            <LinkButton href={{
                host: "www.notion.so",
                pathname: "/cf184497a6414a97aea49c1f1b2f5b5f",
                query: { pvs: 4 },
            }}><span className={textClassName}>POLICY</span></LinkButton>
            <LinkButton href={{
                host: "note.com",
                pathname: "/fec_hokkaido",
            }}><span className={textClassName}>STAFF BLOG</span></LinkButton>
            <LinkButton href={{
                host: "twitter.com",
                pathname: "/fec_hokkaido",
            }}><span className={textClassName}>OFFICIAL 𝕏</span></LinkButton>
        </div>
    );
}