"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-full h-64">
      <Image
        src={"/Image/jingisukan.jpg"}
        alt={"ジンギスカンの画像です"}
        width={1000}
        height={500}
        className="z-[-1] w-full absolute bg-gradient-to-b opacity-50 from-opacity-50 to-white" //透明グラデーションができてない
      />
      <div className="text-black z-1 px-5 pt-10 lg:pt-72">
        <h1 className="font-bold lg:text-center lg:text-5xl">
          Frontend <br className="lg:hidden" />
          Conference <br className="lg:hidden" />
          Hokkaido <br className="lg:hidden" />
          2024（仮）
        </h1>
        <p className="my-2 lg:my-8">
          フロントエンドカンファレンス
          <br className="lg:hidden" />
          北海道2024
        </p>
        <ul className="lg:flex lg:mb-8">
          <li className="flex mr-6">
            <p className="mr-10">Date</p>
            <p className="font-bold">2024.08.24</p>
          </li>
          <li className="flex mr-6">
            <p className="mr-10">Time</p>
            <p className="font-bold">10:00-18:30</p>
          </li>
          <li className="flex">
            <p className="mr-6">Location</p>
            <p className="font-bold">Deep Tech CORE</p>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <p className="mr-10">Icon</p>
          <p>Icon</p>
        </div>
        <Link href="#" className="lg:hidden">
          <button className=" bg-slate-900 py-2 mt-2 w-full rounded-lg text-white">
            参加申し込み
          </button>
        </Link>
      </div>
    </main>
  );
};

export default page;
