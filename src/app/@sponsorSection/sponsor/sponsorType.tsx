// consts/sponsor.ts

// 個々のスポンサータイプの情報を定義
export const Sponsor = {
  // プラチナ
  PLATINUM: {
    typeName: "プラチナ",
    // logosを変更することで、ロゴ画像の変更ができる
    logos: [
      "/images/Icon/icon_longTailedTit.png",
      "/images/Icon/icon_longTailedTit.png",
    ] as string[],
    // グリッドが表示される領域の横幅を指定
    sponsorGridWidth: "w-11/12 mx-auto",
    // レイアウトを指定
    layout: "grid gap-8",
  },
  LOCAL_GOLD: {
    typeName: "道内ゴールド",
    logos: [
      "/images/Icon/icon_cantaloupe.png",
      "/images/Icon/icon_cantaloupe.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  GOLD: {
    typeName: "ゴールド",
    logos: [
      "/images/Icon/icon_lavender.png",
      "/images/Icon/icon_lavender.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  LOCAL: {
    typeName: "ローカル",
    logos: [
      "/images/Icon/icon_lilyOfTheValley.png",
      "/images/Icon/icon_lilyOfTheValley.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  DESIGN: {
    typeName: "デザイン",
    logos: ["/images/Icon/icon_owl.png"] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SPECIAL: {
    typeName: "スペシャル",
    logos: ["/images/Icon/icon_redCrownedCrane.png"] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SILVER: {
    typeName: "シルバー",
    logos: [
      "/images/Icon/icon_crab.png",
      "/images/Icon/icon_crab.png",
    ] as string[],
    sponsorGridWidth: "w-11/12 mx-auto",
    layout: "grid grid-cols-2 gap-8",
  },
} as const;

// 型安全にするための措置
export type SponsorType = keyof typeof Sponsor;
export type Sponsor = {
  type: SponsorType;
};

// スポンサータイプに応じてロゴ画像の配列を返す
export function getLogoList(sponsor: Sponsor): string[] {
  return Sponsor[sponsor.type].logos;
}

// スポンサータイプに応じてグリッドのサイズクラスを返す
export function getSponsorGridWidth(sponsor: Sponsor): string {
  return Sponsor[sponsor.type].sponsorGridWidth;
}

// スポンサータイプに応じてレイアウトクラスを返す
export function getSponsorLayout(sponsor: Sponsor): string {
  return Sponsor[sponsor.type].layout;
}
