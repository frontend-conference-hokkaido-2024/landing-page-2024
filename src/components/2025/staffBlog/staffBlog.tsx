import Image from "next/image";
import Link from "next/link";

import CommonButton from "@/components/2025/elements/CommonButton";
import Title from "@/components/2025/elements/Title";
import NoteLogo from "@/components/2025/images/icon/NoteLogo";

interface NoteArticle {
  title: string;
  thumbnail?: string;
  link: string;
  description?: string;
  pubDate?: string;
}

const fetchLatestArticle = async (): Promise<NoteArticle | null> => {
  try {
    const noteRssXML = await fetch("https://note.com/fec_hokkaido/rss").then(
      (response) => response.text()
    );

    const xmldom = await import("xmldom");
    const parser = new xmldom.DOMParser();
    const parsedXML = parser.parseFromString(noteRssXML, "text/xml");

    const items = parsedXML.getElementsByTagName("item");
    if (items.length === 0) return null;

    const latestItem = items[0];
    const title =
      latestItem.getElementsByTagName("title")[0]?.textContent || undefined;
    const thumbnail =
      latestItem.getElementsByTagName("media:thumbnail")[0]?.textContent ||
      undefined;
    const link =
      latestItem.getElementsByTagName("link")[0]?.textContent || undefined;
    const description =
      latestItem.getElementsByTagName("description")[0]?.textContent ||
      undefined;
    const pubDate =
      latestItem.getElementsByTagName("pubDate")[0]?.textContent || undefined;

    if (title && link) {
      return { title, thumbnail, link, description, pubDate };
    }
    return null;
  } catch (error) {
    console.error("RSS取得エラー:", error);
    return null;
  }
};

export default async function StaffBlog() {
  const latestArticle = await fetchLatestArticle();

  return (
    <section className="flex flex-col gap-6 items-center lg:w-4/5 mx-auto">
      <Title
        icon={
          <Image
            src="images/2025/Icon/icon_salmonRoe.png"
            height={30}
            width={40}
            alt=""
            className="rotate-3"
          />
        }
      >
        スタッフブログ
      </Title>
      <p className="text-lg font-bold">最新の記事</p>

      {latestArticle && (
        <div className="w-full max-w-md overflow-hidden">
          <div className="m-auto pb-5">
            <Link
              href={latestArticle.link}
              target="_blank"
              rel="noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                src={
                  latestArticle.thumbnail ||
                  "images/2025/note-image-in-contents.png"
                }
                width={100}
                height={100}
                alt="記事アイコン"
                className="w-auto border-1"
              />
              <p className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight text-center pt-3">
                {latestArticle.title}
              </p>
            </Link>
          </div>
        </div>
      )}

      <CommonButton asChild>
        <Link
          href="https://note.com/fec_hokkaido"
          target="_blank"
          rel="noreferrer"
        >
          <NoteLogo />
          <span className="px-2.5">スタッフブログ(note)</span>
        </Link>
      </CommonButton>
    </section>
  );
}
