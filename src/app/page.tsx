import Link from "next/link";

import Base from "@/components/Base";

interface NoteArticle {
  title: string;
  link: string;
}

const fetchNotes = async () => {
  const noteRssXML = await fetch(
    "https://note.com/fec_hokkaido/m/m88550dbf59dd/rss"
  )
    .then((response) => {
      return response.text();
    })
    .catch((e) => {
      console.error(e);
      return null;
    });

  if (!noteRssXML) return { articles: null };

  const xmldom = await import("xmldom");
  const parser = new xmldom.DOMParser();
  const parsedXML = parser.parseFromString(noteRssXML, "text/xml");

  const articles: Array<NoteArticle | null> = Array.from(
    parsedXML.getElementsByTagName("item")
  ).map((item) => {
    const title: string | null =
      item.getElementsByTagName("title")[0]?.textContent;
    const link: string | null =
      item.getElementsByTagName("link")[0]?.textContent;

    if (title && link) return { title, link };
    return null;
  });

  return articles;
};

export default async function Home() {
  const articles = await fetchNotes();

  return (
    <Base>
      <section className="p-4">
        <h1 className="text-2xl font-bold mt-3 mb-5">
          フロントエンドカンファレンス北海道2025
        </h1>

        <div className="mb-6">
          <p className="my-6">2025/09/06</p>
          <p>エア・ウォーターの森</p>
          <p>北海道札幌市中央区北8条西13丁目28-21</p>
        </div>

        <div>
          <Link
            href="https://x.com/fec_hokkaido"
            className="underline mr-3"
            rel="noreferrer"
            target="_blank"
          >
            X
          </Link>
          <Link
            href="https://note.com/fec_hokkaido/"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            note
          </Link>
        </div>

        <div className="my-6">
          <h2 className="font-bold mb-4">最新の投稿</h2>
          <ul className="space-y-2 list-disc pl-5">
            {Array.isArray(articles) &&
              articles.length > 0 &&
              articles.map((article, idx) =>
                article ? (
                  <li key={idx}>
                    <Link
                      href={article.link}
                      className="underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {article.title}
                    </Link>
                  </li>
                ) : null
              )}
          </ul>
        </div>

        <div className="mb-6">
          <Link
            href="https://esa-pages.io/p/sharing/22435/posts/13/3a8f7d0dddaeb2ea656e.html"
            className="underline mr-3"
            rel="noreferrer"
            target="_blank"
          >
            行動規範
          </Link>
          <Link
            href="https://aback-jasmine-06b.notion.site/cf184497a6414a97aea49c1f1b2f5b5f"
            className="underline"
            rel="noreferrer"
            target="_blank"
          >
            プライバシーポリシー
          </Link>
        </div>
        <Link
          href={{ pathname: "/2024" }}
          className="underline"
          target="_blank"
        >
          2024
        </Link>
      </section>
    </Base>
  );
}
