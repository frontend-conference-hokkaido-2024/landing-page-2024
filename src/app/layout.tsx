import clsx from "clsx";
import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import Base from "@/components/2025/Base";
import Footer from "@/components/2025/Footer";
import "./globals.css";
import SpMenu from "@/components/2025/menu/sp/SpMenu";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2025";
const description: string =
  "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2025」を2025年9月6日(土)に札幌で開催";
const targetURL = process.env.PRODUCTION_URL_2025;
if (!targetURL) {
  throw new Error("PRODUCTION_URL_2024 environment variable is not defined");
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
      <body className={clsx("relative bg-ivory text-black")}>
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
