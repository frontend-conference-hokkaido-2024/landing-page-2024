import { Building, Youtube } from "lucide-react";
import Paragraph from "./elements/Paragraph";
import Title from "./elements/Title";
import MapPin from "./images/icon/MapPin";

export default function AccessInfo() {
  return (
    <div className="text-center px-5">
      <Title icon={
        <MapPin />
      }>
        アクセス
      </Title>

      <div className="mt-8 flex flex-col items-center gap-6 mx-auto w-full">
        {/* Google Map埋め込み */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11659.075183547682!2d141.34755!3d43.06733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b297554bfffff%3A0x1d7fa677cc47a00b!2zSlI1NSBTQVBQT1JP44OT44Or!5e0!3m2!1sja!2sus!4v1712545562167!5m2!1sja!2sus"
          height="250"
          loading="lazy"
          className="w-full rounded-xl"
        ></iframe>
        <div className="w-full p-5 bg-cornsilk rounded-xl">
          <table className="mx-auto text-left">
            <tbody>
              <tr>
                <td className="w-1/5 align-top">
                  <Paragraph className="text-slateGray" indent={false}>会場</Paragraph>
                </td>
                <td className="w-4/5">
                  <Paragraph className="font-bold mb-2" indent={false}>Deep Tech CORE SAPPORO</Paragraph>
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <Paragraph className="text-slateGray" indent={false}>所在地</Paragraph>
                </td>
                <td>
                  <Paragraph className="font-bold mb-2" indent={false}>
                    札幌市中央区北5条西5丁目1-5
                    <br />
                    JR55SAPPORO 8階
                  </Paragraph>
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <Paragraph className="text-slateGray" indent={false}>最寄駅</Paragraph>
                </td>
                <td>
                  <Paragraph className="font-bold" indent={false}>
                    札幌市営地下鉄さっぽろ駅
                    <br />
                    JR 札幌駅
                  </Paragraph>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-center gap-x-2">
          <Youtube />
          <h3 className="font-semibold text-2xl">オンライン</h3>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-lg">Coming soon...</h4>
          {/* YouTube埋め込み */}
          {/* <iframe className="mx-auto" src="https://www.youtube.com/embed/6vib77CUxNM?si=3E1JhDeCHo-gsQEm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
        </div>
      </div>
    </div>
  );
}
