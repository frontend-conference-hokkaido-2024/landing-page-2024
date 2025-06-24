import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2025";
const description: string = "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2025」を2024年9月6日(土)に札幌で開催";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="scroll-smooth"
      style={{
        fontFamily: `${inter.style.fontFamily}, ${NotoSansJP.style.fontFamily}`,
      }}
      >
      {children}
    </html>
  );
}
