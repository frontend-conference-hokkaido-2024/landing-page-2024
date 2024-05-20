import Image from "next/image";
// import Link from "next/link";

// import { Button } from "@/components/ui/button";

const EventOverView = () => {
  return (
    <div className="mt-32">
      <Image
        src={"/images/note-image-in-contents.png"}
        width={600}
        height={500}
        alt="Frontend Conference HOKKAIDO 2024"
      />
      <div className="text-black px-5">
        <div className="grid grid-cols-4 text-sm">
          <p className="text-slate-500">Date</p>
          <p className="font-semibold col-span-3">2024.08.24</p>

          <p className="text-slate-500">Time</p>
          <p className="font-semibold col-span-3">10:00-18:30</p>

          <p className="text-slate-500">Location</p>
          <p className="font-semibold col-span-3">Deep Tech CORE SAPPORO</p>
        </div>
        {/* <Button asChild className="mt-2 w-full text-sm font-bold">
          <Link href="#">参加申し込み</Link>
        </Button> */}
      </div>
    </div>
  );
};

export default EventOverView;
