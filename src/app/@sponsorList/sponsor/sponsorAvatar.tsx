// スポンサーアイコン タグ
import Image from "next/image";

type SponsorAvatarProps = {
  icon: string;
};

export default function SponsorAvatar({
  icon,
}: SponsorAvatarProps) {
  return (
    <Image
      className="bg-white object-contain w-full aspect-[2/1] rounded-2xl mx-auto"
      alt="Icon"
      src={icon}
      width={65} // 幅を指定
      height={65} // 高さを指定
    />
  );
}

