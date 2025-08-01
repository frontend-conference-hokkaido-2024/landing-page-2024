import Image from "next/image";

import Avatar from "@/components/2025/Avatar";
import Title from "@/components/2025/elements/Title";

export default async function CoreStaffSection() {
  if (process.env.FORTEE_API_HOST_2025 === undefined) {
    throw new Error("環境変数FORTEE_API_HOST_2025が設定されていません");
  }

  const response = await fetch(`${process.env.FORTEE_API_HOST_2025}/staff/v1`);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `データ取得に失敗しました.\n  HTTPステータス: ${response.status}\n body: ${errorBody}`
    );
  }

  const data = (await response.json()) as {
    staff: Array<{
      name: string;
      link_url: string;
      avatar_url: string;
      type: string;
    }>;
  };

  if (data.staff === undefined) {
    throw new Error("データ取得に失敗しました.\n");
  }

  // コアスタッフのみをフィルタリング
  const people = data.staff.filter((person) => person.type === "コアスタッフ");
  // peopleがnullまたは空の配列の場合は何も表示しない

  return (
    <section className="text-center" id="coreStaff">
      <h1 className="font-extrabold mb-8">
        <Title
          icon={
            <Image
              src="/images/2025/Icon/icon_salmon.png"
              alt="Icon"
              className="object-contain"
              width={65} // 適切な幅を指定
              height={65} // 適切な高さを指定
            />
          }
        >
          スタッフ
        </Title>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {people.length === 0 ? (
          <div>データがありません</div>
        ) : (
          people.map((person, index) => (
            <Avatar
              key={index}
              image_url={person.avatar_url}
              name={person.name}
              sns_url={person.link_url}
            />
          ))
        )}
      </div>
    </section>
  );
}
