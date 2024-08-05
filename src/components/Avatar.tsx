import Image from "next/image";
import Link from "next/link";

type AvatarProps = {
  image_url: string;
  name: string;
  sns_url: string;
};

const Avatar = ({ image_url, name, sns_url }: AvatarProps) => {
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
        {
          sns_url ?
            <Link href={sns_url} target="_blank" rel="noopener noreferrer">
              {name}
            </Link>
            :
            name
        }
      </p>
    </div>
  );
};

export default Avatar;
