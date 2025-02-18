import { Button } from "@/components/ui/button";
import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-b-ip-gray-300">
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

        <ul className="flex items-center gap-6">
          {navLists.map((navlist) => (
            <li
              key={navlist.href}
              className={` ${navlist.href !== "/events-opportunities" && "border-r pr-6"} text-ip-gray-400 hover:text-ip-gray-400/90 font-medium text-sm`}
            >
              <Link href={navlist.href}>{navlist.name}</Link>
            </li>
          ))}
        </ul>

        <Button>Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
