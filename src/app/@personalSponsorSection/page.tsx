import Image from "next/image";

import Avatar from "@/components/Avatar";
import Title from "@/components/elements/Title";

type PersonalSponsor = {
  id: number;
  name: string;
  avatar_url: string;
};

export default function Page() {
  const sponsors: PersonalSponsor[] = [
    { id: 1, name: "Sponsor", avatar_url: "/images/Icon/sampleAvatar.png" },
    { id: 2, name: "Sponsor", avatar_url: "/images/Icon/sampleAvatar.png" },
  ];

  // peopleがnullまたは空の配列の場合は何も表示しない

  return (
    <section className="mx-5 mb-12 text-center bg-cornsilk rounded-xl py-4">
      <h1 className="font-extrabold mb-8">
        <Title
          icon={
            <Image
              src="/images/Icon/icon_fox.png"
              alt="Icon"
              className="object-contain"
              width={65} // 適切な幅を指定
              height={65} // 適切な高さを指定
            />
          }
        >
          {"個人スポンサー"}
        </Title>
      </h1>
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
