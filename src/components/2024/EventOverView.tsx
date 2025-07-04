import LogoText from "./images/LogoText";
import TopVisual from "./images/TopVisual";

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
                  2024.08.24(Sat.) 10:00~18:00
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-slateGray lg:text-xl">会場</p>
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
    </section>
  );
};

export default EventOverView;
