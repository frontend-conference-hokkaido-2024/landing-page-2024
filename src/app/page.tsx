import AccessInfo from "@/components/AccessInfo";
import Base from "@/components/Base";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import Footer from "@/components/Footer";
import CommonButton from "@/components/ui/CommonButton";

export default function Home() {
  return (
    <Base>
      <div className="w-full flex flex-col gap-24">
        <main className="flex flex-col gap-24 lg:px-12">
          <EventOverView />
          <CommonButton
            background="bg-gradient-to-r from-pink-500 to-blue-500 "
            lefticon={"images/ticket.png"}
            righticon={"images/ticket.png"}
            text="チケット購入"
          />
          <EventSummary />
          <AccessInfo />
        </main>
        <Footer />
      </div>
    </Base>
  );
}
