// CSSのclassを渡すためにclsxを使用
import clsx from "clsx";

import SponsorAvatar from "./sponsorAvatar";
import { getTypeName, getLogoList, getSponsorGridWidth, getSponsorLayout } from "./sponsorType";

import type { Sponsor } from "./sponsorType";

type SponsorSectionProps = {
  sponsor: Sponsor;
};

const sponsorSection = ({ sponsor }: SponsorSectionProps) => {
  // スポンサータイプ名を取得
  const typeName = getTypeName(sponsor);
  // スポンサータイプに応じてロゴ画像の配列を取得
  const logoList = getLogoList(sponsor);
  // スポンサータイプに応じてグリッドが表示される領域の横幅を取得
  const sizeClass = getSponsorGridWidth(sponsor);
  // スポンサータイプに応じてレイアウトクラスを取得
  const layoutClass = getSponsorLayout(sponsor);

  return (
    <div className={clsx(sizeClass)}>
      <h3 className="font-semibold text-2xl my-8 tracking-wider">
        {typeName}
      </h3>
      {/* スポンサーアイコンの表示 */}
      {/* グリッドのレイアウトを決定 */}
      <div className={clsx(layoutClass)}>
        {logoList.map((icon, index) => (
          <SponsorAvatar key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};
export default sponsorSection;
