"use client";

import { Ticket } from "lucide-react";
import Link from "next/link";

import CommonButton from "./ui/CommonButton";

export default function CTAArea() {
  return (
    <div className="flex flex-col gap-1 items-center w-full">
      <div className="space-y-1">
        <CommonButton
          background="bg-gradient-to-r from-pink-500 to-blue-500"
          asChild
        >
          <Link
            href="https://frontend-conf-2024-hokkaido.peatix.com/"
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Ticket />
            <span className="px-2.5">チケット購入</span>
          </Link>
        </CommonButton>

        <small className="text-caution text-xs font-bold">
          ※オンライン視聴の場合もチケット購入が必要です
        </small>
      </div>
    </div>
  );
}
