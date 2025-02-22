"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLists } from "@/constants";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white border-b border-b-ip-gray-300 fixed w-full z-50">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/impactpalu_logo.webp"
            alt="impact palu logo"
            width={94}
            height={53}
            className="w-22 h-full"
          />
        </Link>

        <nav className="flex items-center gap-6">
          {navLists.map((navlist) => (
            <Link
              key={navlist.href}
              href={navlist.href}
              className={` ${navlist.href !== "/events-opportunities" && "border-r pr-6"} ${pathname.includes(navlist.href) ? "text-ip-primary-500" : "text-ip-gray-400"} hover:text-ip-gray-400/90 font-medium text-sm`}
            >
              {navlist.name}
            </Link>
          ))}
        </nav>

        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
