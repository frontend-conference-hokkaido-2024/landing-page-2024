import Image from "next/image";

import frontend_conference_hokkaido_2024_logo from "@/asset/frontend_conference_hokkaido_2024_logo_jobboard.png";
import Paragraph from "@/components/2024/elements/Paragraph";
import LogoText from "@/components/2024/images/LogoText";

export default function Home() {
  return (
    <>
      <Image src={frontend_conference_hokkaido_2024_logo} alt="" className="" />
      <div className="flex flex-col gap-8 items-center">
        <LogoText />
        <div className="flex gap-3 border-b-2 pb-1 border-black">
          <Image
            src="/images/2025/Icon/icon_Genghiskhan.png"
            alt=""
            width={32}
            height={32}
            className="object-contain rotate-[9deg]"
          />
          <p className="text-2xl font-bold">JOB BOARD</p>
        </div>
        <Paragraph>
          フロントエンドカンファレンス北海道にスポンサーいただいている企業・団体様の求人情報をジョブボードの形式で掲載しております.
        </Paragraph>
      </div>
    </>
  );
}
