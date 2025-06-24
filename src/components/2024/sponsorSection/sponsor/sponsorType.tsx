// consts/sponsor.ts

// 個々のスポンサータイプの情報を定義
export const Sponsor = {
  // プラチナ
  PLATINUM: {
    typeName: "プラチナ",
    // logosを変更することで、ロゴ画像の変更ができる
    logos: [
      "/images/2024/SponsorSection/platina/logo_CodeGrid.png",
      "/images/2024/SponsorSection/platina/logo_MESCIUS.png",
      "/images/2024/SponsorSection/platina/logo_teamLab.png",
    ] as string[],
    // グリッドが表示される領域の横幅を指定
    sponsorGridWidth: "w-11/12 mx-auto",
    // レイアウトを指定
    layout: "grid gap-8",
  },
  LOCAL_GOLD: {
    typeName: "道内ゴールド",
    logos: [
      "/images/2024/SponsorSection/local-gold/logo_HAMWORKS.png",
      "/images/2024/SponsorSection/local-gold/logo_sakura.png",
      "/images/2024/SponsorSection/local-gold/logo_NILTO.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  GOLD: {
    typeName: "ゴールド",
    logos: [
      "/images/2024/SponsorSection/gold/logo_kaonavi.png",
      "/images/2024/SponsorSection/gold/logo_LayerX.png",
      "/images/2024/SponsorSection/gold/logo_cybozu.png",
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
    logos: ["/images/2024/SponsorSection/design/logo_douke.png"] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SPECIAL: {
    typeName: "スペシャル",
    logos: [
      "/images/2024/SponsorSection/special/logo_SapporoEngineerBase.png",
      "/images/2024/SponsorSection/special/logo_LOCAL.png",
    ] as string[],
    sponsorGridWidth: "w-8/12 mx-auto",
    layout: "grid gap-8",
  },
  SILVER: {
    typeName: "シルバー",
    logos: [
      "/images/2024/SponsorSection/silver/logo_VueFesJapan.png",
      "/images/2024/SponsorSection/silver/logo_chot.png",
      "/images/2024/SponsorSection/silver/logo_MIERUNE.png",
      "/images/2024/SponsorSection/silver/logo_kakehashi.png",
      "/images/2024/SponsorSection/silver/logo_DMM.png",
      "/images/2024/SponsorSection/silver/logo_LINEYahoo.png",
    ] as string[],
    sponsorGridWidth: "w-11/12 mx-auto",
    layout: "grid grid-cols-2 gap-8",
  },
  RECEPTION: {
    typeName: "懇親会",
    logos: [
      "/images/2024/SponsorSection/reception/logo_kakehashi.png",
      "/images/2024/SponsorSection/reception/logo_yumemi.png",
      "/images/2024/SponsorSection/reception/logo_CyberAgent.png",
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
