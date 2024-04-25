// PC画面用メニュー

import type { ReactNode } from "react";

import Link from "next/link";

import { LinkButton } from "./LinkButon"
import { Button } from "./ui/button";

import type { UrlObject } from "url";

export default function LinkMenu() {

    return ( 
        <div className="bg-transparent flex flex-col gap-2 w-32">
            <LinkButton href={{
                host: "fortee.jp",
                pathname: "/frontend-conf-hokkaido-2024/proposal/all",
            }}>TALKS</LinkButton>
            <LinkButton href={{
                host: "fortee.jp",
                pathname: "/frontend-conf-hokkaido-2024/timetable",
            }}>TIMETABLE</LinkButton>
            <LinkButton href={{
                pathname: "/jobboard"
            }}>JOB BOARD</LinkButton>
            <LinkButton href={{
                host: "www.notion.so",
                pathname: "/cf184497a6414a97aea49c1f1b2f5b5f",
                query: { pvs: 4 },
            }}>POLICY</LinkButton>
            <LinkButton href={{
                host: "note.com",
                pathname: "/fec_hokkaido",
            }}>STAFF BLOG</LinkButton>
            <LinkButton href="mailto:frontendconfhokkaido2024@gmail.com">MAIL</LinkButton>
        </div>
    );
}