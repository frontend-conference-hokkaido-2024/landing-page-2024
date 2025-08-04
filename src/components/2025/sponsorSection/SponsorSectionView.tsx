import { Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import CommonButton from "../elements/CommonButton";

import SponsorSection from "./sponsor/sponsorSection";

import type { Sponsor } from "./sponsor/sponsorType";

import Title from "@/components/2025/elements/Title";

export default function Page() {
  // スポンサーのロゴ画像をプランごとに指定
  const platinumSponsors: Sponsor = { type: "PLATINUM" };
  const localGoldSponsors: Sponsor = { type: "LOCAL_GOLD" };
  const goldSponsors: Sponsor = { type: "GOLD" };
  // ロゴをいただけていない or 未定のスポンサーはコメントアウト
  // const localSponsors: Sponsor = { type: "LOCAL" };
  const designSponsors: Sponsor = { type: "DESIGN" };
  const specialSponsors: Sponsor = { type: "SPECIAL" };
  const silverSponsors: Sponsor = { type: "SILVER" };
  const receptionSponsors: Sponsor = { type: "RECEPTION" };

  return (
    <section className="text-center" id="sponsor">
      <Title
        icon={
          <Image
            src="/images/2024/Icon/icon_longTailedTit.png"
            alt="Icon"
            className="object-contain"
            width={65} // 適切な幅を指定
            height={65} // 適切な高さを指定
          />
        }
      >
        {"スポンサー"}
      </Title>
      <div className="bg-cornsilk rounded-xl pt-4 pb-16 space-y-20">
        <SponsorSection sponsor={platinumSponsors} />
        <SponsorSection sponsor={goldSponsors} />
        <SponsorSection sponsor={localGoldSponsors} />
        <SponsorSection sponsor={designSponsors} />
        <SponsorSection sponsor={silverSponsors} />
      </div>
      <div className="hidden md:block w-3/4 mx-auto mt-8">
        <CommonButton
          background="bg-gradient-to-r from-pink-500 to-blue-500"
          asChild
        >
          <Link href={{ pathname: "/job-board" }} className="w-full">
            <Handshake />
            <span className="pl-2.5">ジョブボードはこちら！</span>
          </Link>
        </CommonButton>
      </div>
    </section>
  );
}
