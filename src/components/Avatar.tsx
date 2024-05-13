import Image from "next/image";

import type { Person } from "fortee";

type AvatarProps = {
  person: Person
};

const Avatar = ({ person }: AvatarProps) => {
  return (
    <div className="mb-8">
      <Image
        src={person.avatar_url}
        alt={"icon"}
        width={145}
        height={145}
        className="mx-auto mb-2 rounded-full border-4 border-white"
      />
      <p className="text-center text-sm font-semibold text-black">
        {person.name}
      </p>
    </div>
  );
};

export default Avatar;
