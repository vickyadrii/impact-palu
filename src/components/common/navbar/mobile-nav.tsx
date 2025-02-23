import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLists } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button asChild size="icon" variant="outline" className="p-2 rounded-md">
            <Image src="/assets/icons/ic_menu.svg" alt="hamburger menu" width={24} height={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <nav className="md:hidden flex flex-col gap-2">
              <SheetClose asChild>
                <Link
                  href="/"
                  className={`${pathname === "/" ? "text-ip-primary-500" : "text-ip-gray-400"} border-b border-b-white hover:border-b hover:text-ip-primary-500/90 hover:border-b-ip-primary-500 font-medium pb-1 text-sm transition-all ease-out`}
                >
                  Home
                </Link>
              </SheetClose>
              {navLists.map((navlist) => (
                <SheetClose key={navlist.href} asChild>
                  <Link
                    href={navlist.href}
                    className={`${pathname.includes(navlist.href) ? "text-ip-primary-500" : "text-ip-gray-400"} border-b border-b-white hover:border-b hover:text-ip-primary-500/90 hover:border-b-ip-primary-500 font-medium pb-1 text-sm transition-all ease-out`}
                  >
                    {navlist.name}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className={`${pathname === "/contact/" ? "text-ip-primary-500" : "text-ip-gray-400"} border-b border-b-white hover:border-b hover:text-ip-primary-500/90 hover:border-b-ip-primary-500 font-medium pb-1 text-sm transition-all ease-out`}
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
