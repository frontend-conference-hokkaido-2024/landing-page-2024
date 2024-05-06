import AccessInfo from "@/components/AccessInfo";
import AvatarList from "@/components/AvatarList";
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
        <AvatarList avatarListTitle="コアスタッフ" endPointURL= {process.env.FORTEE_API_STAFF} />
      </div>
    </Base>
  );
}


interface Environment {
  FORTEE_API_STAFF: string; 
}

declare const process: {
  env: Environment;
};