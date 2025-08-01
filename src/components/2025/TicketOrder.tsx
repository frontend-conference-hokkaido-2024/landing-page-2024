import React from "react";

// import Link from "next/link";

// import CommonButton from "./elements/CommonButton";
import TicketLogo from "./images/icon/TicketLogo";

// import Paragraph from "@/components/2024/elements/Paragraph";
import Title from "@/components/2024/elements/Title";

const TicketOrder = () => {
  return (
    <div className="w-full">
      <Title icon={<TicketLogo className="rotate-12" />}>チケット購入</Title>
      <div className="mx-auto lg:w-3/4">
        {/* <div className="my-6">
          <Paragraph className="font-bold">
            会場での参加/オンライン視聴どちらを希望される場合でもチケットの購入が必要です.
          </Paragraph>
          <Paragraph>
            チケット販売には, 外部サービス「」を利用しています.
            以下よりアクセスの上ご購入ください.
          </Paragraph>
        </div>
        <CommonButton
          background={
            "bg-gradient-to-r from-ButtonBlue via-ButtonPurple to-ButtonVibrantPurple"
          }
          asChild
        >
          <Link href="/">
            <span className="px-2.5">チケット購入</span>
          </Link>
        </CommonButton> */}
        <p className="text-2xl text-center">Coming soon...</p>
      </div>
    </div>
  );
};

export default TicketOrder;
