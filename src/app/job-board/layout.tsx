import clsx from "clsx";

import Base from "@/components/2025/Base";
import Footer from "@/components/2025/Footer";
import SpMenu from "@/components/2025/menu/sp/SpMenu";

export default function RootLayout({
  children,
  jobBoardSection,
}: Readonly<{
  children: React.ReactNode;
  jobBoardSection: React.ReactNode;
}>) {
  return (
    <body className={clsx("relative bg-BackgroundPurple text-black")}>
      <Base>
        <SpMenu />
        <div className="w-full flex flex-col gap-24">
          <main className="flex flex-col gap-24 lg:px-12 px-8">
            <div className="w-full flex flex-col gap-24">
              {children}
              {jobBoardSection}
            </div>
          </main>
          <Footer />
        </div>
      </Base>
    </body>
  );
}
