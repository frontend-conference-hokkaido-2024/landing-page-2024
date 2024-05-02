import { ReactNode } from "react";
import { UrlObject } from "url";
import { Button } from "./ui/button";
import Link from "next/link";

type LinkButtonProps = {
  children: ReactNode;
  href: string | UrlObject;
}

export const LinkButton = ({children, href}: LinkButtonProps) => {
  return(
      <Button className="font-black text-lg justify-normal" variant="link" asChild>
          <Link className="italic h-6" href={href}>{children}</Link>
      </Button>
  );
};