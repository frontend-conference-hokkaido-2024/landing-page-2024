import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const EventOverView = () => {
  return (
    <main className="mt-32">
      <Image
        src={"/images/note-image-in-contents.png"}
        width={600}
        height={500}
        alt="アイコンです"
      />
      <div className="text-black px-5">
        <div className="grid grid-cols-4">
          <p className="text-sm text-slate-500">Date</p>
          <p className="font-bold text-sm col-span-3">2024.08.24</p>

          <p className="text-sm text-slate-500">Time</p>
          <p className="font-bold text-sm col-span-3">10:00-18:30</p>

          <p className="text-sm text-slate-500">Location</p>
          <p className="font-bold text-sm col-span-3">Deep Tech CORE SAPPORO</p>
        </div>
        <Button asChild>
          <Link href="#">準備中</Link>
        </Button>
      </div>
    </main>
  );
};

export default EventOverView;
