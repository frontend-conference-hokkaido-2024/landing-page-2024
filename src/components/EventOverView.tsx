import TopVisual from "./TopVisual";

// import Link from "next/link";

// import { Button } from "@/components/ui/button";

const EventOverView = () => {
  return (
    <div className="mx-5 mt-12">
      <div className="w-full p-4">
        <TopVisual />
      </div>
      <h1 className="lg:text-3xl text-xl font-semibold text-slate-600 break-keep">
        フロントエンドカンファレンス
        <wbr />
        北海道2024
      </h1>
      <div className="text-black mx-auto flex flex-col mt-4">
        <table className="text-left">
          <tbody>
            <tr>
              <td className="w-1/4">
                <p className="text-slate-500 lg:text-xl">開催日時</p>
              </td>
              <td className="w-3/4">
                <p className="font-semibold col-span-3 lg:text-xl">
                  2024.08.24(土) 10:00-18:30
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-slate-500 lg:text-xl">開催時間</p>
              </td>
              <td>
                <p className="font-semibold col-span-3 lg:text-xl">
                  10:00-18:30
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-slate-500 lg:text-xl">会場</p>
              </td>
              <td>
                <p className="font-semibold col-span-3 lg:text-xl">
                  Deep Tech CORE
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <Button asChild className="mt-2 w-full text-sm font-bold">
          <Link href="#">参加申し込み</Link>
        </Button> */}
      </div>
    </div>
  );
};

export default EventOverView;
