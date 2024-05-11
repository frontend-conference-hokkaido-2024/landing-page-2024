import type { ComponentProps, ReactNode } from "react";


import Link from "next/link";

import { Button } from "./ui/button";

import type { UrlObject } from "url";

type LinkButtonProps = {
  children: ReactNode;
  href: string | UrlObject;
} & ComponentProps<"button">

export const LinkButton = ({ children, href, disabled }: LinkButtonProps) => {
  return (
    <>
    {
      disabled 
      ? children
      : <Button className = "font-black text-lg justify-normal" variant = "link" asChild>
      <Link className = "italic h-6" href = { href } target = "_blank" rel = "noopener noreferrer" >
    { children }
      </Link >
    </Button >
    }
    </>
  );


};