import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-ip-primary-800 text-white md:px-12 px-8 md:py-20 py-10 md:rounded-3xl rounded-xl">
      <div className="flex lg:flex-row flex-col justify-between md:gap-14 gap-6">
        {/* Left Content */}
        <div className="flex flex-col gap-32 basis-[60%]">
          <div className="space-y-6">
            <h3 className="font-semibold xl:text-base text-sm">ABOUT US</h3>
            <h1 className="xl:text-[64px] text-4xl xl:leading-[72px] font-bold bg-gradient-to-r from-white to-ip-gray-500 bg-clip-text text-transparent leading-normal">
              Impact Palu is a social entrepreneurship incubator based in Palu.
            </h1>
            <p className="xl:text-xl xl:leading-8 text-base leading-7">
              Since 2020, we’ve worked at the intersection of innovation, equity, and environmental stewardship,
              supporting grassroots changemakers and sustainable SMEs to tackle pressing social and economic challenges.
            </p>
          </div>

          <Link href="/about">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="md:p-4 p-3 md:w-16 w-12 md:h-16 h-12 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out"
            >
              <Image src="/assets/icons/ic_arrow-down.svg" alt="ic_arrow-down" width={32} height={32} />
            </Button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="basis-[40%]">
          <Image
            src="/assets/images/about.webp"
            alt="About content of Impact Palu"
            width={494}
            height={669}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
