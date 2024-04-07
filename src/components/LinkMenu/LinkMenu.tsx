// PC画面用メニュー

import Link from "next/link";

import { Button } from "../ui/button";

const LINK_STYLE: string = "font-black italic h-[24px] text-center";

type LinkButtonProps = {
    text: string;
    url: string;
}

const LinkButton = ({text, url}: LinkButtonProps) => {
    return(
        <Button variant="link" textSize="lg" justify="normal" asChild>
            <Link className={ LINK_STYLE } href={url}>{text}</Link>
        </Button>
    );
};

export default function LinkMenu() {

    return (
        
        <div className="bg-transparent flex flex-col gap-[8px] w-[118px]">
            <LinkButton text="TALKS" url="https://fortee.jp/frontend-conf-hokkaido-2024/proposal/all"/>
            <LinkButton text="TIMETABLE" url="https://fortee.jp/frontend-conf-hokkaido-2024/timetable"/>
            <LinkButton text="JOB BOARD" url="/jobboard"/>
            <LinkButton text="POLICY" url="https://www.notion.so/cf184497a6414a97aea49c1f1b2f5b5f?pvs=4"/>
            <LinkButton text="STAFF BLOG" url="https://note.com/fec_hokkaido/"/>
            <LinkButton text="MAIL" url="mailto:frontendconfhokkaido2024@gmail.com"/>
        </div>
    );
}