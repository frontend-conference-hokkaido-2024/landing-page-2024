import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const EventOverView = () => {
  return (
    <main>
      <Image
        src={"/images/Fortee.png"}
        width={500}
        height={500}
        alt="アイコンです"
      />
      <div className="text-black px-5">
        <p className="my-2 text-xl text-slate-600">
          フロントエンドカンファレンス
          <br />
          北海道2024
        </p>
        <ul>
          <li className="flex mr-6">
            <p className="mr-10 text-slate-600">Date</p>
            <p className="font-bold text-xl">2024.08.24</p>
          </li>
          <li className="flex mr-6">
            <p className="mr-10 text-slate-600">Time</p>
            <p className="font-bold text-xl">10:00-18:30</p>
          </li>
          <li className="flex">
            <p className="mr-4 text-slate-600">Location</p>
            <p className="font-bold text-xl">Deep Tech CORE</p>
          </li>
        </ul>
        <Button asChild>
          <Link href="#">参加申し込み</Link>
        </Button>
      </div>
    </main>
  );
};

export default EventOverView;
