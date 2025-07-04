// ジョブボードの単位コンポーネント

import Image from "next/image";
import Link from "next/link";

import type { UrlObject } from "url";

import CommonButton from "@/components/2024/elements/CommonButton";
import Paragraph from "@/components/2024/elements/Paragraph";

export type JobProps = {
  comment: string; // 50文字程度
  imageUrl: string;
  href: UrlObject | string;
  alt?: string;
};

export default function Job({ comment, imageUrl, href, alt = "" }: JobProps) {
  return (
    <div className="w-72 h-96 flex flex-col gap-3 p-6 bg-ivory border rounded-md border-black">
      {/* paddingつける */}
      <Image
        className="w-full h-44 bg-white object-contain rounded"
        src={imageUrl}
        alt={alt}
        width={176}
        height={176}
      />
      <Paragraph className="break-all">{comment}</Paragraph>
      <CommonButton className="drop-shadow-md mt-auto" asChild>
        <Link
          className="w-full"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          詳細はこちら
        </Link>
      </CommonButton>
    </div>
  );
}
