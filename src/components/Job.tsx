// ジョブボードの単位コンポーネント

import Image from "next/image";
import Link from "next/link";

import Paragraph from "./elements/Paragraph";
import CommonButton from "./ui/CommonButton";

import type { UrlObject } from "url";

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

export default function Job({ comment, imageUrl, href, alt = "" }: Job) {
    const trimedJobComment = trimJobComment(comment);

    return (
        <div className="w-72 flex flex-col gap-3 p-6 bg-ivory border rounded-md border-black">
            <Image className="w-full h-44 bg-red-300 object-contain" src={imageUrl} alt={alt} width={176} height={176} />
            <Paragraph className="break-all">{trimedJobComment}</Paragraph>
            <Link className="w-full" href={href} target="_blank" rel="noopener noreferrer">
                <CommonButton className="drop-shadow-md">
                    詳細はこちら
                </CommonButton>
            </Link>
        </div>
    );
}
