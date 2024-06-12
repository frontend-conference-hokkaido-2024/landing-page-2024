import type { UrlObject } from "url";

export type JobProps = {
  comment: string; // 50文字程度
  imageUrl: string;
  href: UrlObject | string;
  alt?: string;
}

export type JobBoardSectionProps = JobProps[];
