import Image from "next/image";

import type { Person, StaffData } from "fortee";

import Avatar from "@/components/2024/Avatar";
import Title from "@/components/2024/elements/Title";

export default async function CoreStaffSection() {
  if (process.env.FORTEE_API_HOST_2024 === undefined) {
    throw new Error("環境変数FORTEE_API_HOST_2024が設定されていません");
  }

  const response = await fetch(`${process.env.FORTEE_API_HOST_2024}/staff`);

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(
      `データ取得に失敗しました.\n  HTTPステータス: ${response.status}\n body: ${errorBody}`
    );
  }

  const data = (await response.json()) as {
    staff: {
      " core_staff": Person[];
    };
  };

  if (data.staff === undefined) {
    throw new Error("データ取得に失敗しました.\n");
  }

  // ObjectのKeyから空白を取り除く
  const cleanedData = {
    staff: Object.fromEntries(
      Object.entries(data.staff).map(([key, value]) => [key.trim(), value])
    ),
  } as StaffData; // typedMapを使い型をつける方が良いが, 今回はas句で強制キャスト

  const people: Person[] = cleanedData.staff.core_staff;
  // peopleがnullまたは空の配列の場合は何も表示しない

  return (
    <section className="text-center" id="coreStaff">
      <h1 className="font-extrabold mb-8">
        <Title
          icon={
            <Image
              src="/images/2024/Icon/icon_lavender.png"
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
          people.map((person) => (
            <Avatar
              key={person.id}
              image_url={person.avatar_url}
              name={person.name}
              sns_url={person.url}
            />
          ))
        )}
      </div>
    </section>
  );
}
