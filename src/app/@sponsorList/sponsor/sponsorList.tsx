import clsx from "clsx";

import SponsorAvatar from "./sponsorAvatar";

import type { Sponsor } from "./sponsorType";

type SponsorListProps = {
  sponsor: Sponsor;
};

const SponsorList = ({ sponsor }: SponsorListProps) => {
  const logoList = getLogoList(sponsor);
  const sizeClass = getSponsorSize(sponsor);
  const layoutClass = getSponsorLayout(sponsor);

  return (
    <div className={clsx(sizeClass)}>
      <h3 className="font-semibold text-2xl my-8 tracking-wider">{sponsor.type}</h3>
      <div className={clsx(layoutClass)}>
        {logoList.map((icon, index) => (
          <SponsorAvatar key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default SponsorList;

// スポンサーのロゴ画像をプランごとに指定
const platinumSponsors = [
  "/images/Icon/icon_longTailedTit.png",
  "/images/Icon/icon_longTailedTit.png",
];
const localGoldSponsors = [
  "/images/Icon/icon_cantaloupe.png",
  "/images/Icon/icon_cantaloupe.png",
];
const goldSponsors = [
  "/images/Icon/icon_lavender.png",
  "/images/Icon/icon_lavender.png",
];
const localSponsors = [
  "/images/Icon/icon_lilyOfTheValley.png",
  "/images/Icon/icon_lilyOfTheValley.png",
];
const designSponsors = ["/images/Icon/icon_owl.png"];
const specialSponsors = ["/images/Icon/icon_redCrownedCrane.png"];
const silverSponsors = [
  "/images/Icon/icon_crab.png",
  "/images/Icon/icon_crab.png",
];

// スポンサータイプに応じてロゴ画像の配列を返す
export function getLogoList(sponsor: Sponsor): string[] {
  switch (sponsor.type) {
    case "プラチナ":
      return platinumSponsors;
    case "道内ゴールド":
      return localGoldSponsors;
    case "ゴールド":
      return goldSponsors;
    case "ローカル":
      return localSponsors;
    case "デザイン":
      return designSponsors;
    case "スペシャル":
      return specialSponsors;
    case "シルバー":
      return silverSponsors;
  }
}

// スポンサータイプに応じてサイズクラスを返す
export function getSponsorSize(sponsor: Sponsor): string {
  switch (sponsor.type) {
    case "プラチナ":
      return "w-11/12 mx-auto";
    case "道内ゴールド":
    case "ゴールド":
    case "ローカル":
    case "デザイン":
    case "スペシャル":
      return "w-8/12 mx-auto";
    case "シルバー":
      return "w-11/12 mx-auto";
  }
}

// スポンサータイプに応じてレイアウトクラスを返す
export function getSponsorLayout(sponsor: Sponsor): string {
  switch (sponsor.type) {
    case "シルバー":
      return "grid grid-cols-2 gap-8";
    default:
      // デフォルトのレイアウトクラス
      return "grid gap-8";
  }
}
