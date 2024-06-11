// スポンサーアイコン タグ
import Image from "next/image";

type SponsorAvatarProps = {
  icon: string;
};

// 画像の表示サイズはsponsorSectionが決定する
// widthとheightは上位コンポーネントが制御するため、値は変更不要
export default function SponsorAvatar({ icon }: SponsorAvatarProps) {
  return (
    <Image
      className="bg-white object-contain w-full aspect-[2/1] rounded-2xl mx-auto"
      alt="Icon"
      src={icon}
      width={65}  
      height={65}
    />
  );
}
