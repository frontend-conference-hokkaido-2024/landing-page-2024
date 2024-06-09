
import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import TicketOrder from "@/components/TicketOrder";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <EventOverView />
      <EventSummary />
      <AccessInfo />
      <TicketOrder/>
    </div>
  );
}
