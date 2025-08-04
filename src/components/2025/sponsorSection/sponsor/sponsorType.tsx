// consts/sponsor.ts

// 個々のスポンサータイプの情報を定義
export const Sponsor = {
  // プラチナ
  PLATINUM: {
    typeName: "プラチナ",
    // logosを変更することで、ロゴ画像の変更ができる
    logos: [
      "/images/2025/SponsorSection/platina/chot Inc..png",
      "/images/2025/SponsorSection/platina/株式会社Gaudiy.png",
    ] as string[],
    // グリッドが表示される領域の横幅を指定
    sponsorGridWidth: "w-11/12 mx-auto",
    // レイアウトを指定
    layout: "grid gap-8",
  },
  LOCAL_GOLD: {
    typeName: "ローカルゴールド",
    logos: [
      "/images/2025/SponsorSection/local-gold/株式会社MIERUNE.png",
      "/images/2025/SponsorSection/local-gold/Sapporo Engineer Base.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  GOLD: {
    typeName: "ゴールド",
    logos: [
      "/images/2025/SponsorSection/gold/テックタッチ株式会社.png",
      "/images/2025/SponsorSection/gold/株式会社HAMWORKS.png",
      "/images/2025/SponsorSection/gold/さくらインターネット株式会社.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  LOCAL: {
    typeName: "ローカル",
    logos: [] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  DESIGN: {
    typeName: "デザイン",
    logos: ["/images/2025/SponsorSection/design/design_sponsor.jpg"] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SPECIAL: {
    typeName: "スペシャル",
    logos: [
      "/images/2025/note-image-in-contents.png",
      "/images/2025/note-image-in-contents.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SILVER: {
    typeName: "シルバー",
    logos: [
      "/images/2025/SponsorSection/silver/株式会社PR TIMES.png",
      "/images/2025/SponsorSection/silver/株式会社えにしテック.png",
      "/images/2025/SponsorSection/silver/CodeRabbit.png",
      "/images/2025/SponsorSection/silver/株式会社ノベルティ.png",
      "/images/2025/SponsorSection/silver/メシウス株式会社.png",
      "/images/2025/SponsorSection/silver/株式会社カオナビ.png",
    ] as string[],
    sponsorGridWidth: "w-11/12 mx-auto",
    layout: "grid grid-cols-2 gap-8",
  },
  RECEPTION: {
    typeName: "懇親会",
    logos: [
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

// スポンサータイプ名を返す
export function getTypeName(sponsor: Sponsor): string {
  return Sponsor[sponsor.type].typeName;
}
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
