// ジョブボードの単位コンポーネント

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

import type { UrlObject } from "url";
import Paragraph from "./elements/Paragraph";

const MAX_JOB_COMMENT_LENGTH = 50;

const trimJobComment = (jobComment: string) => {
    if (jobComment.length > MAX_JOB_COMMENT_LENGTH) {
        jobComment = jobComment.substring(0, MAX_JOB_COMMENT_LENGTH) + "...";
    }

    return jobComment;
};

type Job = {
    comment: string; // 50文字まで
    imageUrl: string;
    href: UrlObject | string;
    alt?: string;
}

export default function Job({comment, imageUrl, href, alt=""}: Job) {
    const trimedJobComment = trimJobComment(comment);

    return(
        <div className="w-72 flex flex-col justify-center items-center p-6 bg-ivory border rounded-md border-black">
            <Image src={imageUrl} alt={alt} width={250} height={250} className="w-full h-44"/>
            <Paragraph>{trimedJobComment}</Paragraph>
            <Button className="w-full font-bold text-sm" asChild>
                <Link href={href}>詳細はこちら</Link>
            </Button>
        </div>
    );
}
