import clsx from "clsx";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "フロントエンドカンファレンス北海道2024",
  openGraph: {
    title: "フロントエンドカンファレンス北海道2024",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx("relative", inter.className)}>
        <div></div>{/*背景に何か要素をつけたいのであれば...*/}
        {children}
      </body>
    </html>
  );
}
