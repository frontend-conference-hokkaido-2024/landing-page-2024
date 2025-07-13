import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2025";
const description: string =
  "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2025」を2025年9月6日(土)に札幌で開催";
const targetURL = process.env.PRODUCTION_URL_2025;
if (!targetURL) {
  throw new Error("PRODUCTION_URL_2025 environment variable is not defined");
}

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(targetURL),
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
