import Image from "next/image";

import SponsorList from "./sponsor/sponsorList";

import type { Sponsor } from "./sponsor/sponsorType";

import Title from "@/components/elements/Title";

export default function Page() {
  const platinumSponsors: Sponsor = { type: "プラチナ" };
  const localGoldSponsors: Sponsor = { type: "道内ゴールド" };
  const goldSponsors: Sponsor = { type: "ゴールド" };
  const localSponsors: Sponsor = { type: "ローカル" };
  const designSponsors: Sponsor = { type: "デザイン" };
  const specialSponsors: Sponsor = { type: "スペシャル" };
  const silverSponsors: Sponsor = { type: "シルバー" };
  return (
    <section className="mx-5 mb-12 text-center">
      <h1 className="font-extrabold mb-8">
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
      </h1>
      <div className=" bg-cornsilk rounded-xl pt-4 pb-16 space-y-20">
        <SponsorList sponsor={platinumSponsors} />
        <SponsorList sponsor={localGoldSponsors} />
        <SponsorList sponsor={goldSponsors} />
        <SponsorList sponsor={localSponsors} />
        <SponsorList sponsor={designSponsors} />
        <SponsorList sponsor={specialSponsors} />
        <SponsorList sponsor={silverSponsors} />
      </div>
    </section>
  );
}
