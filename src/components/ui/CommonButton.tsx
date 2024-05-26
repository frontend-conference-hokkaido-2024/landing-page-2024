import type { ReactNode } from "react";

type buttonProps = {
  background?: string;
  lefticon?: ReactNode;
  righticon?: ReactNode;
  children?: string;
};

const CommonButton: React.FC<buttonProps> = ({
  background,
  lefticon,
  righticon,
  children,
}) => {

  return (
    <button
      className={`w-full ${background} text-white rounded-full px-4 py-2.5 flex items-center justify-center`}
    >
      {lefticon}
      <span className="text-sm px-2.5 font-bold">{children}</span>
      {righticon}
    </button>
  );
};

export default CommonButton;
