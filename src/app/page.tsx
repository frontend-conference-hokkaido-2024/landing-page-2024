import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import CommonButton from "@/components/ui/CommonButton";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <main className="flex flex-col gap-24 lg:px-12">
        <EventOverView />
        <CommonButton
          background={"bg-gradient-to-r from-pink-500 to-blue-500 "}
          lefticon={"Images/Icon/icon_crab.png"}
          righticon={"Images/Icon/icon_crab.png"}
        >
          チケット購入
        </CommonButton>
        <EventSummary />
        <AccessInfo />
      </main>
    </div>
  );
}
