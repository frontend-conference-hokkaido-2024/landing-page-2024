import Title from "./elements/Title";
import WifiLogo from "./images/icon/WifiLogo";

export default function Online() {
  return (
    <section id="streaming">
      <Title icon={<WifiLogo />}>オンライン</Title>
      <div>
        <p className="font-semibold text-2xl text-center">Coming soon...</p>
        <p className="font-semibold text-sm text-center break-keep">当日のアーカイブは公開に向けて<wbr />現在調整中です。<br />公開まで今しばらくお待ちください。</p>
        {/* YouTube埋め込み */}
        {/* <iframe className="mx-auto" src="https://www.youtube.com/embed/6vib77CUxNM?si=3E1JhDeCHo-gsQEm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      </div>
    </section>
  );
}
