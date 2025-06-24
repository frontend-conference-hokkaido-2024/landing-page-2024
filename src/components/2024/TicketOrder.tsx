import React from "react";

import Link from "next/link";

import CommonButton from "./elements/CommonButton";
import TicketLogo from "./images/icon/TicketLogo";

import Paragraph from "@/components/2024/elements/Paragraph";
import Title from "@/components/2024/elements/Title";

const TicketOrder = () => {
  return (
    <div className="w-full">
      <Title icon={<TicketLogo className="rotate-12" />}>チケット購入</Title>
      <div className="mx-auto lg:w-3/4">
        <div className="my-6">
          <Paragraph className="font-bold">
            会場での参加/オンライン視聴どちらを希望される場合でもチケットの購入が必要です.
          </Paragraph>
          <Paragraph>
            チケット販売には, 外部サービス「Peatix」を利用しています.
            以下よりアクセスの上ご購入ください.
          </Paragraph>
        </div>
        <CommonButton
          background={"bg-gradient-to-r from-pink-500 to-blue-500"}
          asChild
        >
          <Link href="https://frontend-conf-2024-hokkaido.peatix.com/">
            <span className="px-2.5">Peatixで購入</span>
          </Link>
        </CommonButton>
      </div>
    </div>
  );
};

export default TicketOrder;
