import Title from "./elements/Title";
import WifiLogo from "./images/icon/WifiLogo";

export default function Online() {
  return (
    <section id="streaming">
      <Title icon={<WifiLogo />}>オンライン</Title>
      <p className="text-2xl text-center">Coming soon...</p>
    </section>
  );
}
