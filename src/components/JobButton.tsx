import React from "react";

import Link from "next/link";

import Handshake from "./images/icon/Handshake";
import CommonButton from "./ui/CommonButton";

const JobButton = () => {
  return (
    <div className="hidden lg:flex justify-center">
      <div className="w-3/4">
        <CommonButton
          background="bg-gradient-to-r from-pink-500 to-blue-500"
          asChild
        >
          <Link
            href={{ pathname: "job-board" }}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Handshake />
            <span className="pl-2.5">ジョブボードはこちら！</span>
          </Link>
        </CommonButton>
      </div>
    </div>
  );
};

export default JobButton;
