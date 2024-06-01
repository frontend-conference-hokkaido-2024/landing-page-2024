// スポンサーアイコン タグ
import Image from "next/image";

type SponsorAvatarProps = {
  icon: string;
  imgWidth: number;
  imgHeight: number;
};

export default function SponsorAvatar({
  icon,
  imgWidth,
  imgHeight,
}: SponsorAvatarProps) {
  return (
    <Image
      className="bg-white w-full aspect-[2/1] rounded-md mx-auto"
      alt="Icon"
      src={icon}
      width={imgWidth} // 適切な幅を指定
      height={imgHeight} // 適切な高さを指定
    />
  );
}

