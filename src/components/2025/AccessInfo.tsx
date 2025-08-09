import Title from "./elements/Title";
import MapPin from "./images/icon/MapPin";

export default function AccessInfo() {
  return (
    <section className="text-center" id="access">
      <Title icon={<MapPin />}>アクセス</Title>

      <div className="mt-8 flex flex-col items-center gap-6 mx-auto w-full">
        {/* Google Map埋め込み */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5829.401051749077!2d141.332422!3d43.0687657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2900027a4f73%3A0x2ab8d7d93669a9b7!2z44Ko44Ki44Km44Kp44O844K_44O844Gu5qOu!5e0!3m2!1sja!2sjp!4v1752148900140!5m2!1sja!2sjp"
          height="250"
          loading="lazy"
          className="w-full lg:w-3/4 rounded-xl"
        ></iframe>
        <div className="w-full lg:w-3/4 py-5 px-6 bg-ContentBackground rounded-xl">
          <table className="text-left mx-auto">
            <tbody>
              <tr>
                <td className="align-top">
                  <p className="text-slateGray text-sm mr-5">会場</p>
                </td>
                <td>
                  <p className="font-bold mb-2 text-sm">エア・ウォーターの森</p>
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <p className="text-slateGray text-sm mr-5">所在地</p>
                </td>
                <td>
                  <p className="font-bold mb-2 text-sm w-fit">
                    北海道札幌市中央区北8条西13丁目28-21
                  </p>
                </td>
              </tr>
              <tr>
                <td className="align-top">
                  <p className="text-slateGray text-sm mr-5">最寄駅</p>
                </td>
                <td>
                  <p className="font-bold text-sm">
                    JR函館本線・学園都市線「桑園駅」
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
