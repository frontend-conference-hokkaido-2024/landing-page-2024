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
            }}><span className={textClassName}>JOB BOARD</span></LinkButton>
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