import clsx from "clsx";
import { Inter, Noto_Sans_JP } from "next/font/google";

import Base from "@/components/Base";
import Footer from "@/components/Footer";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
  jobBoardSection,
}: Readonly<{
  children: React.ReactNode;
  jobBoardSection: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={clsx("relative")} style={{fontFamily: `${inter.style.fontFamily}, ${NotoSansJP.style.fontFamily}`}}>
        <div></div>{/*背景に何か要素をつけたいのであれば...*/}
        <Base>
          <div className="w-full flex flex-col gap-24">
            <main className="flex flex-col gap-16 lg:px-12 px-8">
              {children}
              {jobBoardSection}
            </main>
            <Footer />
          </div>
        </Base>
      </body>
    </html>
  );
}
