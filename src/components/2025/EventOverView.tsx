import Link from "next/link";

import CommonButton from "./elements/CommonButton";
import LogoText from "./images/LogoText";
import TopVisual from "./images/TopVisual";
import WhiteTicketLogo from "./images/icon/WhiteTicketLogo";

const EventOverView = () => {
  return (
    <section className="mt-12" id="overview">
      <div className="w-full">
        <TopVisual />
      </div>
      <div className="my-8 flex justify-center">
        <LogoText />
      </div>
      <div className="text-black mx-auto flex flex-col items-center w-fit">
        <table className="text-lef text-sm mb-6">
          <tbody>
            <tr>
              <td className="w-1/4 align-top">
                <p className="text-slateGray lg:text-xl">開催日時</p>
              </td>
              <td className="w-3/4">
                <p className="font-semibold col-span-3 lg:text-xl">
                  2025.09.06(Sat.) 00:00~00:00
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-slateGray lg:text-xl">会場</p>
              </td>
              <td>
                <p className="font-semibold col-span-3 lg:text-xl">
                  エア・ウォーターの森
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <CommonButton
          background={
            "bg-gradient-to-r from-ButtonBlue via-ButtonPurple to-ButtonVibrantPurple"
          }
          className="w-2/3 lg:w-3/4 m-auto"
          asChild
        >
          <Link href="/">
            <WhiteTicketLogo />
            <span className="px-2.5 font-bold">チケット購入</span>
          </Link>
        </CommonButton>
        <p className="text-xs text-red-800 text-center p-2 font-bold">
          ※オンライン視聴の場合もチケット購入が必要です
        </p>
      </div>
    </section>
  );
};

export default EventOverView;
