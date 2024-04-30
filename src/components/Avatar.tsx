import React from "react";

import Image from "next/image";

type AvatarProps = {
  avatarImage: string;
  alt: string;
  avatarName: string;
};

const Avatar = ({ avatarImage, alt, avatarName }: AvatarProps) => {
  return (
    <div>
      <Image
        src={avatarImage}
        alt={alt}
        width={150}
        height={150}
        className="mx-auto py-4 rounded-full"
      />
      <p className="text-center text-sm font-semibold pb-4 text-black">
        {avatarName}
      </p>
    </div>
  );
};

export default Avatar;
