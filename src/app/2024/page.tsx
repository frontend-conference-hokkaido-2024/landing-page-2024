import AccessInfo from "@/components/2024/AccessInfo";
import EventOverView from "@/components/2024/EventOverView";
import EventSummary from "@/components/2024/EventSummary";
import Online from "@/components/2024/Online";
import Photos from "@/components/2024/Photos";
import TicketOrder from "@/components/2024/TicketOrder";
import CoreStaffSection from "@/components/2024/coreStaffSection/CoreStaffSection";
import PersonalSponsorSection from "@/components/2024/personalSponsorSection/PersonalSponsorSection";
import SponsorSectionView from "@/components/2024/sponsorSection/SponsorSectionView";
import StaffBlog from "@/components/2024/staffBlog/staffBlog";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <EventOverView />
      <EventSummary />
      <AccessInfo />
      <Photos />
      <Online />
      <TicketOrder />
      <StaffBlog />
      <SponsorSectionView />
      <PersonalSponsorSection />
      <CoreStaffSection />
    </div>
  );
}
