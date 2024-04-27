import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import frontend_conference_hokkaido_2024_logo from '@/asset/frontend_conference_hokkaido_2024_logo.png';

export default function EventSummary() {

    return (
        <div className="mx-5 mb-12 text-center">
            <h1 className="text-3xl font-extrabold m-8">イベント概要</h1>
            <h3 className="font-semibold text-2xl break-words mb-4 text-left">フロントエンドカンファレンス北海道2024を開催します！</h3>
            <div style={{ marginBottom: '20px' }}>
                <Image src={frontend_conference_hokkaido_2024_logo} alt='' />
            </div>
            <p className="break-words text-left">
                2024年8月24日（土）に北海道札幌市で開催する、フロントエンド領域に関心のある参加者を対象とした技術イベントです。
                <br /><br />
                2023年11月に沖縄で開催された、フロントエンドカンファレンス沖縄をリスペクトしたカンファレンスでもあります。
                <br /><br />
                札幌を中心に、全国のプロダクト開発に関わるエンジニアとデザイナーが交わる場を作ることを目指し、
                HTML、CSS、JavaScript、UI、UX、デザイン、アクセシビリティ、SPA、PWAなど、Webに携わるすべてのフロントエンド領域に関心のある方を対象としています。
                <br /><br />
                札幌市内での現地開催のほか、オンライン配信（アーカイブあり）も予定しております。
                参加チケットは販売開始次第、公式Xアカウント(@fec_hokkaido)でお知らせします。
                ぜひフォローして、通知をオンにしてお待ちください。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '20px' }}>
                <Button className="font-bold text-sm" style={{ marginBottom: '20px' }}>
                    <Link href="https://twitter.com/fec_hokkaido">
                        @fec_hokkaido をフォロー
                    </Link>
                </Button>
                <Button className="font-bold text-sm">
                    <Link href="https://twitter.com/intent/tweet?hashtags=frontendo">
                        #frontendo でシェアする
                    </Link>
                </Button>
            </div>
        </div>
    );
}
