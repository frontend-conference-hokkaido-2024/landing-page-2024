import AccessInfo from "@/components/AccessInfo";
import EventOverView from "@/components/EventOverView";
import EventSummary from "@/components/EventSummary";
import Online from "@/components/Online";
import CoreStaffSection from "@/components/coreStaffSection/CoreStaffSection";
import PersonalSponsorSection from "@/components/personalSponsorSection/PersonalSponsorSection";
import SponsorSectionView from "@/components/sponsorSection/SponsorSectionView";
import StaffBlog from "@/components/staffBlog/staffBlog";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <EventOverView />
      <EventSummary />
      <AccessInfo />
      <Online />
      <StaffBlog />
      <SponsorSectionView />
      <PersonalSponsorSection />
      <CoreStaffSection />
    </div>
  );
}
