import Image from "next/image";

import Avatar from "@/components/2025/Avatar";
import Title from "@/components/2025/elements/Title";

type PersonalSponsor = {
  id: number;
  name: string;
  avatar_url: string;
};

export default function Page() {
  const sponsors: PersonalSponsor[] = [
    {
      id: 1,
      name: "湯村 翼",
      avatar_url: "/images/2025/SponsorSection/personal/湯村 翼.png",
    },
    {
      id: 2,
      name: "tacck",
      avatar_url: "/images/2025/SponsorSection/personal/tacck.png",
    },
    {
      id: 3,
      name: "kou",
      avatar_url: "/images/2025/SponsorSection/personal/kou.png",
    },
    {
      id: 4,
      name: "potato4d(Takuma HANATANI)",
      avatar_url:
        "/images/2025/SponsorSection/personal/potato4d(Takuma HANATANI).jpeg",
    },
    {
      id: 5,
      name: "やまのく",
      avatar_url: "/images/2025/SponsorSection/personal/やまのく.png",
    },
  ];
  // peopleがnullまたは空の配列の場合は何も表示しない

  return (
    <section className="text-center bg-ContentBackground rounded-xl py-4">
      <Title
        icon={
          <Image
            src="/images/2025/Icon/icon_scallops.png"
            alt="Icon"
            className="object-contain"
            width={45} // 適切な幅を指定
            height={45} // 適切な高さを指定
          />
        }
      >
        個人スポンサー
      </Title>
      <h1 className="font-extrabold mb-8"></h1>
      <div
        className={`grid ${
          sponsors.length === 1
            ? "grid-cols-1"
            : sponsors.length === 2
            ? "grid-cols-2"
            : "grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {sponsors.map((sponsor) => (
          <Avatar
            key={sponsor.id}
            image_url={sponsor.avatar_url}
            name={sponsor.name}
          />
        ))}
      </div>
    </section>
  );
}
