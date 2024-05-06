import AccessInfo from "@/components/AccessInfo";
import Base from "@/components/Base";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Base>
      <div className="w-full flex flex-col gap-24">
        <main className="flex flex-col gap-24 lg:px-12">
          <EventOverView />
          <EventSummary />
          <AccessInfo />
        </main>
        <Footer />
      </div>
    </Base>
  );
}
