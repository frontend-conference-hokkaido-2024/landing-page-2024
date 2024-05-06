import Image from 'next/image';
import Link from 'next/link';

import { Button } from './ui/button';

import frontend_conference_hokkaido_2024_logo from '@/asset/frontend_conference_hokkaido_2024_logo.png';

export default function EventSummary() {
    return (
        <div className="mx-5 text-center">
            <h1 className="text-3xl font-extrabold mb-8">イベント概要</h1>
            <h3 className="font-semibold text-xl break-keep mb-4">フロントエンドカンファレンス<wbr />北海道2024を開催します！</h3>
            
            <div className="mb-4">
                <Image src={frontend_conference_hokkaido_2024_logo} alt="" className=" rounded-md" />
            </div>

            <p className="break-words text-left mt-8 mb-8">
                2024年8月24日（土）に北海道札幌市で開催する、フロントエンド領域に関心のある参加者を対象とした技術イベントです。
            </p>
            <p className="break-words text-left mb-8">
                2023年11月に沖縄で開催された、フロントエンドカンファレンス沖縄をリスペクトしたカンファレンスでもあります。
            </p>
            <p className="break-words text-left mb-8">
                札幌を中心に、全国のプロダクト開発に関わるエンジニアとデザイナーが交わる場を作ることを目指し、HTML、CSS、JavaScript、UI、UX、デザイン、アクセシビリティ、SPA、PWAなど、Webに携わるすべてのフロントエンド領域に関心のある方を対象としています。
            </p>
            <p className="break-words text-left mb-8">
                札幌市内での現地開催のほか、オンライン配信（アーカイブあり）も予定しております。
                参加チケットは販売開始次第、公式Xアカウント(@fec_hokkaido)でお知らせします。
                ぜひフォローして、通知をオンにしてお待ちください。
            </p>

            <div className="flex flex-col justify-start mt-5">
                <Button asChild className="font-bold text-sm mb-4">
                    <Link href="https://twitter.com/fec_hokkaido" target="_blank" rel="noopener noreferrer">
                        @fec_hokkaido をフォロー
                    </Link>
                </Button>
                <Button asChild className="font-bold text-sm">
                    <Link href="https://twitter.com/intent/tweet?hashtags=frontendo" target="_blank" rel="noopener noreferrer">
                        #frontendo でシェアする
                    </Link>
                </Button>
            </div>
        </div>
    );
}
