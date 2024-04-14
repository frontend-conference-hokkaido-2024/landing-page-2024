import { Building, Youtube } from "lucide-react";


export default function AccessInfo() {
    return(
        <div className="text-center">
            <h1 className="text-3xl font-extrabold">アクセス</h1>

            <div className="mt-8 flex flex-col ">
                <div className="flex items-center justify-center gap-2">
                    <Building />
                    <h3 className="font-semibold text-2xl">会場</h3>
                </div>
                <div className="mt-4 mx-auto">
                    {/* Google Map埋め込み */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11659.075183547682!2d141.34755!3d43.06733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b297554bfffff%3A0x1d7fa677cc47a00b!2zSlI1NSBTQVBQT1JP44OT44Or!5e0!3m2!1sja!2sus!4v1712545562167!5m2!1sja!2sus" height="250" loading="lazy"></iframe>
                    <div className="flex flex-col gap-y-2 mt-4 text-sm text-left">
                        <div className="flex items-center gap-x-5">
                            <p className="font-semibold w-16">会場</p>
                            <p>Deep Tech CORE</p>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <p className="font-semibold w-16">所在地</p>
                            <p>札幌市中央区北5条西5丁目1-5<br />JR55SAPPORO 8階</p>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <p className="font-semibold w-16">最寄駅</p>
                            <p>JR 札幌駅 札幌市営地下鉄<br />さっぽろ駅</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center justify-center gap-x-2">
                    <Youtube />
                    <h3 className="font-semibold text-2xl">オンライン</h3>
                </div>
                <div className="mt-4">
                    <h4 className="font-semibold text-lg">Coming soon...</h4>
                </div>
                {/* YouTube埋め込み */}
                <iframe className="mx-auto" src="https://www.youtube.com/embed/6vib77CUxNM?si=3E1JhDeCHo-gsQEm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}