import AccessInfo from "@/components/AccessInfo";
import Base from "@/components/Base";
import CoreStaffList from "@/components/CoreStaffListView";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <Base>
      <div className="flex flex-col gap-24">
        <EventOverView />
        <EventSummary />
        <AccessInfo />
        <Footer />
        <CoreStaffList />
      </div>
    </Base>
  );
}
