import clsx from "clsx";
import { Inter, Noto_Sans_JP } from "next/font/google";

import type { Metadata } from "next";

import Base from "@/components/Base";
import Footer from "@/components/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

const title: string = "フロントエンドカンファレンス北海道2024";
const description: string =
  "フロントエンド領域のエンジニア・デザイナー向けの技術カンファレンス「フロントエンドカンファレンス北海道2024」を2024年8月24日(土)に札幌で開催";
const metadataBaseURL = process.env.PRODUCTION_URL;
if (!metadataBaseURL) {
  throw new Error("FORTEE_API_HOST environment variable is not defined");
}
export const metadata: Metadata = {
  metadataBase:new URL(metadataBaseURL), // 本番では直す
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
  personalSponsorList,
  coreStaffList,
}: Readonly<{
  children: React.ReactNode;
  personalSponsorList: React.ReactNode;
  coreStaffList: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={clsx("relative")}
        style={{
          fontFamily: `${inter.style.fontFamily}, ${NotoSansJP.style.fontFamily}`,
        }}
      >
        <div></div>
        {/*背景に何か要素をつけたいのであれば...*/}
        <Base>
          <div className="w-full flex flex-col gap-24">
            <main className="flex flex-col gap-24 lg:px-12">
              {children}
              {personalSponsorList}
              {coreStaffList}
            </main>
            <Footer />
          </div>
        </Base>
      </body>
    </html>
  );
}
