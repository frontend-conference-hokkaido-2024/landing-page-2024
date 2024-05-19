import AccessInfo from "@/components/AccessInfo";
// import AvatarList from "@/components/AvatarList";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";


export default function Home() {
  return (
    <>

<EventOverView />
          <EventSummary />
          <AccessInfo />
          {/* <AvatarList title="コアスタッフ" category="coreStaff" /> */}
    </>
  );
}