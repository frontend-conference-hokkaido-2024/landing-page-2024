import Image from "next/image";
import Link from "next/link";


import type { Note } from "note";

import Title from "@/components/elements/Title";
import NoteLogo from "@/components/images/icon/NoteLogo";
import CommonButton from "@/components/ui/CommonButton";

export default async function Page() {
  const response = await fetch("https://note.com/api/v2/creators/fec_hokkaido/contents?kind=note&page=1");

  if (!response.ok) {
    throw new Error(
      `データ取得に失敗しました.\n  HTTPステータス: ${response.status}`
    );
  }

  const data = (await response.json()) as {
    data: {
      "contents": Note[];
    }
  };

  if (data.data === undefined) {
    throw new Error("データ取得に失敗しました.\n");
  }

  const lastNoteData = data.data.contents[0];

  return (
    <section className="flex flex-col gap-6 items-center lg:w-4/5 mx-auto">
      <Title icon={
        <Image
          src="images/Icon/icon_cantaloupe.png"
          height={30}
          width={40}
          alt=""
          className="rotate-3"
        />
      }>スタッフブログ</Title>
      <p className="tracking-wider text-lg font-bold">
        最新の記事
      </p>
      <div className="flex flex-col items-center gap-3">
        <Image
          className="rounded object-contain lg:w-full"
          src={lastNoteData.eyecatch}
          width={300}
          height={157}
          alt="" />
          <Link href={`https://note.com/fec_hokkaido/n/${lastNoteData.key}`} className="text-sm font-bold leading-extraRelaxed" target="_blank" rel="noopener noreferrer">
            {lastNoteData.name}
          </Link>
      </div>
      <CommonButton asChild>
        <Link href="https://note.com/fec_hokkaido">
          <NoteLogo />
          <span className="px-2.5">スタッフブログ(note)</span>
        </Link>
      </CommonButton>
    </section>
  );
}
