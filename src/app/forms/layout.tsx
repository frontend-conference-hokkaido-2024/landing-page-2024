import clsx from "clsx";

import Base from "@/components/2025/Base";
import LogoText from "@/components/2025/images/LogoText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={clsx("relative bg-BackgroundPurple text-black")}>
      <Base>
        <div className="w-full flex flex-col gap-24">
          <main className="flex flex-col gap-24">
            <div className="w-full flex flex-col gap-24">
              {children}
            </div>
          </main>
          <LogoText className="absolute bottom-5 inset-x-0 mx-auto"/>
        </div>
      </Base>
    </body>
  );
}
