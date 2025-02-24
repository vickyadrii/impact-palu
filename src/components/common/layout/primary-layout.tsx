"use client";

import { usePathname } from "next/navigation";

import Footer from "./footer";
import { Navbar } from "./navbar";

type Props = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-8">{children}</div>
      {pathname !== "/" && <Footer />}
    </>
  );
};

export default PrimaryLayout;
