import Title from "./elements/Title";
import WifiLogo from "./images/icon/WifiLogo";

export default function Online() {
  return (
    <section id="streaming">
      <Title icon={<WifiLogo />}>オンライン</Title>
      <div className="mb-6">
        <p className="font-semibold text-2xl text-center">#カケハシ</p>
        <iframe className="aspect-video w-2/3 mx-auto" src="https://www.youtube.com/embed/6vib77CUxNM?si=3E1JhDeCHo-gsQEm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div>
        <p className="font-semibold text-2xl text-center">#LINEヤフーWOWルーム</p>
        <iframe className="aspect-video w-2/3 mx-auto" src="https://www.youtube.com/embed/6vib77CUxNM?si=3E1JhDeCHo-gsQEm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </section>
  );
}
