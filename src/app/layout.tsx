import clsx from "clsx";
import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2024";
const description: string = "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2024」を2024年8月24日(土)に札幌で開催";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    site: "@fec_hokkaido",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx("relative")} style={{fontFamily: `${inter.style.fontFamily}, ${NotoSansJP.style.fontFamily}`}}>
        <div></div>{/*背景に何か要素をつけたいのであれば...*/}
        {children}
      </body>
    </html>
  );
}
