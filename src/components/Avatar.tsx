import Image from "next/image";

type AvatarProps = {
  avatarImage: string;
  avatarName: string;
};

const Avatar = ({ avatarImage, avatarName }: AvatarProps) => {
  return (
    <div>
      <Image
        src={avatarImage}
        alt={"icon"}
        width={145}
        height={145}
        className="mx-auto mb-2 rounded-full border-4 border-white"
      />
      <p className="text-center text-sm font-semibold text-black">
        {avatarName}
      </p>
    </div>
  );
};

export default Avatar;
