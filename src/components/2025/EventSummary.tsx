import Image from "next/image";
import Link from "next/link";

import CommonButton from "./elements/CommonButton";
import WhiteTicketLogo from "./images/icon/WhiteTicketLogo";

import frontend_conference_hokkaido_2025_logo from "@/asset/frontend_conference_hokkaido_2025_logo.png";
import Title from "@/components/2025/elements/Title";

export default function EventSummary() {
  return (
    <div className="text-center">
      <Title
        icon={
          <Image
            src="/images/2025/Icon/icon_ramen.png"
            alt="Icon"
            className="object-contain"
            width={45} // 適切な幅を指定
            height={45} // 適切な高さを指定
          />
        }
      >
        {"イベント概要"}
      </Title>
      <Image
        src={frontend_conference_hokkaido_2025_logo}
        alt=""
        className=" rounded-md"
      />
      <div className="mt-4">
        <h3 className="tracking-wide font-semibold text-xl break-keep">
          フロントエンドカンファレンス
          <wbr />
          北海道2025を開催します！
        </h3>
      </div>

      <p className="tracking-wider break-words text-left mt-8 mb-8 indent-5">
        2025年9月6日（土）に北海道札幌市で開催する、フロントエンド領域に関心のある参加者を対象とした技術イベントです。
      </p>
      <p className="tracking-wider break-words text-left mb-8 indent-5">
        札幌を中心に、全国のプロダクト開発に関わるエンジニアとデザイナーが交わる場を作ることを目指し、HTML、CSS、JavaScript、UI、UX、デザイン、アクセシビリティ、SPA、PWAなど、Webに携わるすべてのフロントエンド領域に関心のある方を対象としています。
      </p>

      <div className="flex flex-col justify-start mt-5 space-y-4 lg:w-3/4 lg:mx-auto">
        <CommonButton asChild>
          <Link href="https://twitter.com/fec_hokkaido">
            <span className="px-2.5">@fec_hokkaido をフォロー！</span>
          </Link>
        </CommonButton>
        <CommonButton asChild>
          <Link
            href={`https://twitter.com/intent/tweet?hashtags=frontendo&url=${process.env.PRODUCTION_URL_2025}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="px-2.5">#frontendo でシェア！</span>
          </Link>
        </CommonButton>
      </div>
    </div>
  );
}
