import React from "react";

import Image from "next/image";
import Link from "next/link";

import CommonButton from "./ui/CommonButton";

import Paragraph from "@/components/elements/Paragraph";
import Title from "@/components/elements/Title";

const TicketOrder = () => {
  return (
    <div className="w-full px-8">
      <Title
        icon={
          <Image
            src={"Images/Icon/icon_ticket.png"}
            width={18}
            height={18}
            alt="title icon"
            className="h-5 w-6"
          />
        }
      >
        チケット購入
      </Title>
      <div className="py-6">
        <Paragraph className="font-bold">
          会場での参加/オンライン視聴どちらを希望される場合でもチケットの購入が必要です.
        </Paragraph>
        <Paragraph>
          チケット販売には, 外部サービス「fortee」を利用しています.
          以下よりアクセスの上ご購入ください.
        </Paragraph>
      </div>
      <Link href="#">
        <CommonButton
          background={"bg-gradient-to-r from-pink-500 to-blue-500"}
          lefticon={
            <Image
              src={"Images/Icon/icon_fortee.png"}
              width={18}
              height={18}
              alt="fortee icon"
            />
          }
        >
          forteeで購入
        </CommonButton>
      </Link>
    </div>
  );
};

export default TicketOrder;
