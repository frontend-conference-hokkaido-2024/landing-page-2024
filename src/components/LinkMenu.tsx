// PC画面用メニュー

import type { ReactNode } from "react";

import Link from "next/link";

import { Button } from "./ui/button";

import type { UrlObject } from "url";

type LinkButtonProps = {
    children: ReactNode;
    href: string | UrlObject;
}

const LinkButton = ({children, href}: LinkButtonProps) => {
    return(
        <Button className="font-black text-lg justify-normal" variant="link" asChild>
            <Link className="italic h-6" href={href}>{children}</Link>
        </Button>
    );
};

export default function LinkMenu() {

    return ( 
        <div className="bg-transparent flex flex-col gap-3 w-32">
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
            <LinkButton href={{
                host: "twitter.com",
                pathname: "/fec_hokkaido",
            }}>OFFICIAL 𝕏</LinkButton>
        </div>
    );
}