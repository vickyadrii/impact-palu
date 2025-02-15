import { navLists } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-b-ip-gray-300">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/impactpalu_logo.png"
            alt="impact palu logo"
            width={100}
            height={100}
            className="w-24 h-full"
          />
        </Link>

        <ul className="flex items-center gap-6">
          {navLists.map((navlist) => (
            <li
              key={navlist.href}
              className={` ${navlist.href !== "/events-opportunities" && "border-r pr-6"} text-ip-gray-400 font-medium`}
            >
              <Link href={navlist.href}>{navlist.name}</Link>
            </li>
          ))}
        </ul>

        <button>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
