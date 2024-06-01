import clsx from "clsx";

import SponsorAvatar from "./sponsorAvatar";
import { getLogoList, getSponsorSize, getSponsorLayout } from "./sponsorType";

import type { Sponsor } from "./sponsorType";

type SponsorListProps = {
  sponsor: Sponsor;
};

const SponsorList = ({ sponsor }: SponsorListProps) => {
  const logoList = getLogoList(sponsor);
  const sizeClass = getSponsorSize(sponsor);
  const layoutClass = getSponsorLayout(sponsor);

  return (
    <div className={clsx(sizeClass)}>
      <h3 className="font-semibold text-2xl my-8 tracking-wider">
        {sponsor.type}
      </h3>
      <div className={clsx(layoutClass)}>
        {logoList.map((icon, index) => (
          <SponsorAvatar key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};
export default SponsorList;
