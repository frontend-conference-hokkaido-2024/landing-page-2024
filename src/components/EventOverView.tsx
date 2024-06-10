import TopVisual from "./TopVisual";
import LogoText from "./images/icon/LogoText";

const EventOverView = () => {
  return (
    <div className="mx-5 mt-12">
      <div className="w-full p-4">
        <TopVisual />
      </div>
      <div className="py-8">
        <LogoText />
      </div>
      <div className="text-black mx-auto flex flex-col mt-4">
        <table className="text-lef text-sm">
          <tbody>
            <tr>
              <td className="w-1/4">
                <p className="text-slate-500 lg:text-xl">開催日時</p>
              </td>
              <td className="w-3/4">
                <p className="font-semibold col-span-3 lg:text-xl">
                  2024.08.24(Sat.) 10:00~18:30
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-slate-500 lg:text-xl">会場</p>
              </td>
              <td>
                <p className="font-semibold col-span-3 lg:text-xl">
                  Deep Tech CORE SAPPORO
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventOverView;
