import { NotebookPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import frontend_conference_hokkaido_2025_logo from "@/asset/frontend_conference_hokkaido_2025_logo_jobboard.png";
import CommonButton from "@/components/2025/elements/CommonButton";
import Title from "@/components/2025/elements/Title";

export default function FormsPage() {
  return (
    <main className="w-full h-full flex flex-col gap-20">
      <Image src={frontend_conference_hokkaido_2025_logo} alt="" className="" />
      <section className="px-8 lg:w-2/3 lg:mx-auto">
        <Title icon={<NotebookPen />}>アンケート</Title>
      <CommonButton
        background="bg-gradient-to-r from-ButtonBlue via-ButtonPurple to-ButtonVibrantPurple"
        asChild
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfPbgYnyqLz3kvRY2dlw0ISowzyFNmYE5sJXKvK_Us-o02wqA/viewform?usp=header"
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          アンケートリンクはこちら
        </Link>
      </CommonButton>
      </section>
    </main>
  );
}
