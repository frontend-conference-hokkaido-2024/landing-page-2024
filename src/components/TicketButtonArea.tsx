import { Ticket } from "lucide-react";

import CommonButton from "./ui/CommonButton";

export default function TicketButtonArea() {
  return (
    <div className="flex flex-col gap-1 items-center w-full">
      <CommonButton
        background="bg-gradient-to-r from-pink-500 to-blue-500"
        lefticon={<Ticket />}>
        チケット購入
      </CommonButton>
      <p className="text-caution text-xs font-bold">※オンライン視聴の場合もチケット購入が必要です</p>
    </div>
  );
}