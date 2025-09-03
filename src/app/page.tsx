import clsx from "clsx";

import AccessInfo from "@/components/2025/AccessInfo";
import Base from "@/components/2025/Base";
import EventOverView from "@/components/2025/EventOverView";
import EventSummary from "@/components/2025/EventSummary";
import Footer from "@/components/2025/Footer";
import Online from "@/components/2025/Online";
import TicketOrder from "@/components/2025/TicketOrder";
import TimeTable from "@/components/2025/TimeTable";
import CoreStaffSection from "@/components/2025/coreStaffSection/CoreStaffSection";
import DayStaffSection from "@/components/2025/dayStaffSection/DayStaffSection";
import SpMenu from "@/components/2025/menu/sp/SpMenu";
import PersonalSponsorSection from "@/components/2025/personalSponsorSection/PersonalSponsorSection";
import SponsorSectionView from "@/components/2025/sponsorSection/SponsorSectionView";
import StaffBlog from "@/components/2025/staffBlog/staffBlog";

export default function Home() {
  return (
    <body className={clsx("relative bg-BackgroundPurple text-black")}>
      <Base>
        <SpMenu />
        <div className="w-full flex flex-col gap-24">
          <main className="flex flex-col gap-24 lg:px-12 px-8">
            <div className="w-full flex flex-col gap-24">
              <EventOverView />
              <EventSummary />
              <AccessInfo />
              <Online />
              <TicketOrder />
              <TimeTable />
              <StaffBlog />
              <SponsorSectionView />
              <PersonalSponsorSection />
              <CoreStaffSection />
              <DayStaffSection />
            </div>
          </main>
          <Footer />
        </div>
      </Base>
    </body>
  );
}
