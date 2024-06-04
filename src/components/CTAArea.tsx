"use client";

import { Ticket } from "lucide-react";
import Link from "next/link";

import CommonButton from "./ui/CommonButton";

export default function CTAArea() {
  return (
    <div className="flex flex-col gap-1 items-center w-full">
      <CommonButton
        background="bg-gradient-to-r from-pink-500 to-blue-500"
        lefticon={<Ticket />}
        asChild
      >
        <Link href="https://example.com" className="w-full" target="_blank" rel="noopener noreferrer">
          チケット購入
        </Link>
      </CommonButton>

      <small className="text-caution text-xs font-bold">※オンライン視聴の場合もチケット購入が必要です</small>
    </div>
  );
}