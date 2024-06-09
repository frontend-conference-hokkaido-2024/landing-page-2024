import React from "react";

import Image from "next/image";
import Link from "next/link";

import TicketLogo from "./images/icon/TicketLogo";
import CommonButton from "./ui/CommonButton";

import Paragraph from "@/components/elements/Paragraph";
import Title from "@/components/elements/Title";

const TicketOrder = () => {
  return (
    <div className="w-full">
      <Title icon={<TicketLogo />}>チケット購入</Title>
      <div className="py-6">
        <Paragraph className="font-bold">
          会場での参加/オンライン視聴どちらを希望される場合でもチケットの購入が必要です.
        </Paragraph>
        <Paragraph>
          チケット販売には, 外部サービス「fortee」を利用しています.
          以下よりアクセスの上ご購入ください.
        </Paragraph>
      </div>
      <Link href="https://frontend-conf-2024-hokkaido.peatix.com/">
        <CommonButton background={"bg-gradient-to-r from-pink-500 to-blue-500"}>
          <Image
            src={"Images/Icon/icon_fortee.png"}
            width={18}
            height={18}
            alt="fortee icon"
          />
          <span className="px-2.5">forteeで購入</span>
        </CommonButton>
      </Link>
    </div>
  );
};

export default TicketOrder;
