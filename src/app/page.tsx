import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import Online from "@/components/Online";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <EventOverView />
      <EventSummary />
      <AccessInfo />
      <Online />
    </div>
  );
}
