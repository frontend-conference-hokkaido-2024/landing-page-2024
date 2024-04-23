// ジョブボードの単位コンポーネント

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

import type { UrlObject } from "url";

const MAX_COMPANY_COMMENT_LENGTH = 50;

const trimCompanyComment = (companyComment: string) => {
    if (companyComment.length > MAX_COMPANY_COMMENT_LENGTH) {
        companyComment = companyComment.substring(0, MAX_COMPANY_COMMENT_LENGTH) + "...";
    }

    return companyComment;
};

type CompanyCardProps = {
    companyComment: string; // 50文字まで
    companyImage: string;
    href: UrlObject;
    alt?: string;
}

export default function CompanyCard({companyComment, companyImage, href, alt=""}: CompanyCardProps) {
    const trimedCompanyComment = trimCompanyComment(companyComment);

    return(
        <Card className="w-80 h-[448px] flex justify-center items-center">
            <div className="w-64 h-96 relative">
                <Image src={companyImage} alt={alt} width={250} height={250} className="mx-auto"/>
                <p className="w-56 mx-auto mt-3 h-16 text-sm text-slate-500">{trimedCompanyComment}</p>
                <Button className="w-full font-bold text-sm absolute bottom-0" asChild>
                    <Link href={href}>詳細はこちら</Link>
                </Button>
            </div>
        </Card>
    );
}
