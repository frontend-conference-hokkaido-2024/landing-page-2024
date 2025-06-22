import Title from "./elements/Title";
import WifiLogo from "./images/icon/WifiLogo";

export default function Online() {
  return (
    <section id="streaming">
      <Title icon={<WifiLogo />}>オンライン</Title>
      <div className="mb-6">
        <p className="font-semibold text-2xl text-center">#カケハシ</p>
        <iframe
          className="aspect-video lg:w-4/5 w-full mx-auto"
          src="https://www.youtube.com/embed/XnLPdrKTOug?si=RKN2WnW8S0DD-hqf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <p className="font-semibold text-2xl text-center">
          #LINEヤフーWOWルーム
        </p>
        <iframe
          className="aspect-video lg:w-4/5 w-full mx-auto"
          src="https://www.youtube.com/embed/fpXLHtka86g?si=kil9zMv-jcaF3Me5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
