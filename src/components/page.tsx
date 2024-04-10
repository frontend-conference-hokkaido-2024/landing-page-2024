import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <main>
      <div className="text-black z-1 px-5 pt-20">
        <h1 className="text-4xl font-bold">
          Frontend <br />
          Conference <br />
          Hokkaido <br />
          2024（仮）
        </h1>
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
        <Link href="#">
          <Button>参加申し込み</Button>
        </Link>
      </div>
    </main>
  );
};

export default page;
