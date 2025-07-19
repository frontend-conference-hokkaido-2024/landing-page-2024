import Image from "next/image";
import Link from "next/link";

import CommonButton from "@/components/2025/elements/CommonButton";
import Title from "@/components/2025/elements/Title";
import NoteLogo from "@/components/2025/images/icon/NoteLogo";

export default function StaffBlog() {
  return (
    <section className="flex flex-col gap-6 items-center lg:w-4/5 mx-auto">
      <Title
        icon={
          <Image
            src="images/2024/Icon/icon_cantaloupe.png"
            height={30}
            width={40}
            alt=""
            className="rotate-3"
          />
        }
      >
        スタッフブログ
      </Title>
      <CommonButton asChild>
        <Link href="https://note.com/fec_hokkaido">
          <NoteLogo />
          <span className="px-2.5">スタッフブログ(note)</span>
        </Link>
      </CommonButton>
    </section>
  );
}
