// consts/sponsor.ts
export const Sponsor = {
  PLATINUM: {
    typeName: "プラチナ",
    logos: [
      "/images/Icon/icon_longTailedTit.png",
      "/images/Icon/icon_longTailedTit.png",
    ] as string[],
    imageSize: "w-11/12 mx-auto",
    layout: "grid gap-8",
  },
  LOCAL_GOLD: {
    typeName: "道内ゴールド",
    logos: [
      "/images/Icon/icon_cantaloupe.png",
      "/images/Icon/icon_cantaloupe.png",
    ] as string[],
    imageSize: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  GOLD: {
    typeName: "ゴールド",
    logos: [
      "/images/Icon/icon_lavender.png",
      "/images/Icon/icon_lavender.png",
    ] as string[],
    imageSize: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  LOCAL: {
    typeName: "ローカル",
    logos: [
      "/images/Icon/icon_lilyOfTheValley.png",
      "/images/Icon/icon_lilyOfTheValley.png",
    ] as string[],
    imageSize: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  DESIGN: {
    typeName: "デザイン",
    logos: ["/images/Icon/icon_owl.png"] as string[],
    imageSize: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SPECIAL: {
    typeName: "スペシャル",
    logos: ["/images/Icon/icon_redCrownedCrane.png"] as string[],
    imageSize: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SILVER: {
    typeName: "シルバー",
    logos: [
      "/images/Icon/icon_crab.png",
      "/images/Icon/icon_crab.png",
    ] as string[],
    imageSize: "w-11/12 mx-auto",
    layout: "grid grid-cols-2 gap-8",
  },
} as const;

export type SponsorType = keyof typeof Sponsor;

export type Sponsor = {
  type: SponsorType;
};

// スポンサータイプに応じてロゴ画像の配列を返す
export function getLogoList(sponsor: Sponsor): string[] {
  return Sponsor[sponsor.type].logos;
}

// スポンサータイプに応じてサイズクラスを返す
export function getSponsorSize(sponsor: Sponsor): string {
  return Sponsor[sponsor.type].imageSize;
}

// スポンサータイプに応じてレイアウトクラスを返す
export function getSponsorLayout(sponsor: Sponsor): string {
  return Sponsor[sponsor.type].layout;
}
