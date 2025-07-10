import AccessInfo from "@/components/2025/AccessInfo";
import EventOverView from "@/components/2025/EventOverView";
import EventSummary from "@/components/2025/EventSummary";
import CoreStaffSection from "@/components/2025/coreStaffSection/CoreStaffSection";
import PersonalSponsorSection from "@/components/2025/personalSponsorSection/PersonalSponsorSection";
import SponsorSectionView from "@/components/2025/sponsorSection/SponsorSectionView";
import StaffBlog from "@/components/2025/staffBlog/staffBlog";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      <EventOverView />
      <EventSummary />
      <AccessInfo />
      <StaffBlog />
      <SponsorSectionView />
      <PersonalSponsorSection />
      <CoreStaffSection />
    </div>
  );
}
