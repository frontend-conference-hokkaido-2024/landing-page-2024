import Image from "next/image";
import Link from "next/link";

import CommonButton from "../ui/CommonButton";

import SponsorSection from "./sponsor/sponsorSection";

import type { Sponsor } from "./sponsor/sponsorType";

import Title from "@/components/elements/Title";

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
            src="/images/Icon/icon_longTailedTit.png"
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
        <SponsorSection sponsor={localGoldSponsors} />
        <SponsorSection sponsor={goldSponsors} />
        {/* <SponsorSection sponsor={localSponsors} /> */}
        <SponsorSection sponsor={designSponsors} />
        <SponsorSection sponsor={specialSponsors} />
        <SponsorSection sponsor={silverSponsors} />
        <SponsorSection sponsor={receptionSponsors} />
      </div>
      <div className="mt-8">
        <div className="hidden lg:flex justify-center w-3/4 mx-auto">
          <CommonButton
            background="bg-gradient-to-r from-pink-500 to-blue-500"
            asChild
          >
            <Link href={{ pathname: "job-board" }} className="w-full">
              <span className="pl-2.5">ジョブボードはこちら！</span>
            </Link>
          </CommonButton>
        </div>
      </div>
    </section>
  );
}
