import Image from "next/image";

type AvatarProps = {
  image_url: string;
  name: string;
};

const Avatar = ({ image_url, name }: AvatarProps) => {
  return (
    <div className="mb-8">
      <Image
        src={image_url}
        alt={"icon"}
        width={145}
        height={145}
        className="mx-auto mb-2 rounded-full border-4 border-white"
      />
      <p className="text-center text-sm font-semibold text-black">
        {name}
      </p>
    </div>
  );
};

export default Avatar;
