import clsx from "clsx";
import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import Base from "@/components/Base";
import Footer from "@/components/Footer";
import "./globals.css";
import SpMenu from "@/components/menu/sp/SpMenu";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2024";
const description: string =
  "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2024」を2024年8月24日(土)に札幌で開催";
const targetURL = process.env.PRODUCTION_URL;
if (!targetURL) {
  throw new Error("PRODUCTION_URL environment variable is not defined");
}
export const metadata: Metadata = {
  metadataBase: new URL(targetURL),
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
    <html lang="ja" className="scroll-smooth">
      <body
        className={clsx("relative bg-ivory text-black")}
        style={{
          fontFamily: `${inter.style.fontFamily}, ${NotoSansJP.style.fontFamily}`,
        }}
      >
        <div></div>
        {/*背景に何か要素をつけたいのであれば...*/}
        <Base>
          <SpMenu />
          <div className="w-full flex flex-col gap-24">
            <main className="flex flex-col gap-24 lg:px-12 px-8">
              {children}
            </main>
            <Footer />
          </div>
        </Base>
      </body>
    </html>
  );
}
