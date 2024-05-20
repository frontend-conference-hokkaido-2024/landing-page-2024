import React from "react";

import Image from "next/image";

type buttontype = {
  leftColor: string;
  rightColor: string;
  icon: string;
  text: string;
};

const CommonButton: React.FC<buttontype> = ({
  leftColor,
  rightColor,
  icon,
  text,
}) => {
  return (
    <button
      className={`w-full bg-gradient-to-r from-${leftColor} to-${rightColor} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      <Image
        src={icon}
        width={18}
        height={18}
        alt="button icon"
        className="text-wite"
      />
      <span className="text-sm pl-2.5 font-bold">{text}</span>
    </button>
  );
};

export default CommonButton;
