"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  href: string;
  children: React.ReactNode;
}

const SidebarButton = ({ href, children } : SidebarButtonProps) => {
  const pathName = usePathname();
  return (
    <>
      <Button
        variant={pathName === `${href}` ? "secondary" : "ghost"}
        className="justify-start gap-2"
      >
        <Link href={href} className="flex gap-2">
          {children}
        </Link>
      </Button>


    </>
  );
};

export default SidebarButton;
