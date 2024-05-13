import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";

export default function Home() {
  return (
    <>
      <EventOverView />
      <EventSummary />
      <AccessInfo />
    </>
  );
}
