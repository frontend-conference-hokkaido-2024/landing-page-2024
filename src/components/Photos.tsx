import Image from "next/image";
import Link from "next/link";

import Title from "./elements/Title";
import Camera from "./images/icon/Camera";
import CommonButton from "./ui/CommonButton";

import { Images } from "lucide-react";

export default function Photos() {
  return(
    <section className="flex flex-col">
      <Title icon={<Camera />}>当日の写真</Title>
      <Image
        src="https://lh3.googleusercontent.com/pw/AP1GczPbgabQ8hLkk0ozFh5AitEs49O1TKnSleKwXwmlbmn-BInX_bVTWJvPK0Frzk_JLWSN5xb8V2WtIzfJv3lPRHKhv9aEaqhPnE-7sty_F_2TbL0qxii8EsJdxQlzD0n_vKivjqrxeI4S0xt9vGgXUigD=w1430-h953-s-no-gm?authuser=0"
        width={250}
        height={250}
        className="object-contain rounded lg:w-3/4 w-full mb-4 mx-auto"
        alt={""} />
      <CommonButton className="mx-auto lg:w-3/4 bg-gradient-to-r from-pink-500 to-blue-500" asChild>
        <Link
          href="https://photos.app.goo.gl/QRsqeJNxo5gUk2TM6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Images />
          <span className="pl-2.5">当日の写真はこちら</span>
        </Link>
      </CommonButton>
    </section>
  );
}
