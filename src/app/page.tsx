import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";

export default function Home() {
  return (
      <div className="w-full flex flex-col gap-24">
        <main className="flex flex-col gap-24 lg:px-12">
          <EventOverView />
          <EventSummary />
          <AccessInfo />
        </main>
      </div>
  );
}
