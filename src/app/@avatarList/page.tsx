import type { Person, StaffData } from "fortee";

import Avatar from "@/components/Avatar";

export default async function Page() {  

	if(process.env.FORTEE_API_HOST === undefined) {
		throw new Error("環境変数FORTEE_API_HOSTが設定されていません");
	}

  const response = await fetch(`${process.env.FORTEE_API_HOST}/staff`, {
		// Next.jsのcache戦略によりfetch結果がキャッシュされるので無効化（ビルド間でのキャッシュ共有を避けるため）
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error(
      `データ取得に失敗しました.\n  HTTPステータス: ${response.status}`
    );
  }

  const data = await response.json() as {
		staff: {
			" core_staff": Person[];
		};
	};

	if(data.staff === undefined) {
		throw new Error("データ取得に失敗しました.\n");
	}

	// ObjectのKeyから空白を取り除く
	const cleanedData = {
		staff: Object.fromEntries(
			Object.entries(data.staff).map(([key, value]) => [key.trim(), value])
		) 
	} as StaffData; // typedMapを使い型をつける方が良いが, 今回はas句で強制キャスト

  const people: Person[] = cleanedData.staff.core_staff;
  // peopleがnullまたは空の配列の場合は何も表示しない


  return (
    <div className="mx-5 mb-12 text-center">
      <h1 className="text-3xl font-extrabold mb-8">{"コアスタッフ"}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {people.length === 0 ? (
					<div>データがありません</div>
				) : (
					people.map((person) => (
						<Avatar key={person.id} person={person} />
					))
				)}
      </div>
    </div>
  );
}