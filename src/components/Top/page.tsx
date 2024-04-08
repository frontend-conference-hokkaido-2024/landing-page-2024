"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <Image
        src={"/Image/jingisukan.jpg"}
        alt={"ジンギスカンの画像です"}
        width={1000}
        height={500}
        className="z-[-1] lg:w-full hidden lg:block absolute opacity-40"
      />
      <div className="text-black z-1 px-5 pt-20 lg:px-20 lg:pt-72">
        <h1 className="text-4xl font-bold lg:text-center lg:py-4 lg:text-5xl">
          Frontend <br className="lg:hidden" />
          Conference <br className="lg:hidden" />
          Hokkaido <br className="lg:hidden" />
          2024（仮）
        </h1>
        <p className="my-2 lg:my-8 text-xl text-slate-600">
          フロントエンドカンファレンス
          <br className="lg:hidden" />
          北海道2024
        </p>
        <ul className="lg:flex lg:mb-8">
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
        <div className="hidden lg:flex">
          <button className="mr-8">
            <Image
              src={"/Image/note-icon.png"}
              width={35}
              height={35}
              alt="noteのアイコンです"
              className="border-2 border-slate-200"
            />
          </button>
          <button>
            <Image
              src={"/Image/mail-icon.png"}
              width={35}
              height={35}
              alt="mailのアイコンです"
            />
          </button>
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
