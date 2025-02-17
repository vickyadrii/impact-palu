import BorderImage from "@/components/ui/border-image";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="space-y-8 relative">
      {/* Title */}
      <div className="space-y-4">
        <div className="relative">
          <h1 className="text-center md:text-[64px] text-5xl md:leading-[72px] leading-[55px] text-ip-primary-600 font-bold">
            Sustaining <br /> Local Change
          </h1>
          <Image
            src="/assets/vectors/line.svg"
            alt="line"
            width={135}
            height={71}
            className="md:w-[135px] w-20 absolute md:right-56 right-4 top-1/2 -translate-y-1/2 -z-10 md:block hidden"
          />
        </div>
        <p className="md:text-lg text-base text-center text-ip-gray-600">
          Fostering social entrepreneurship ecosystem in Central Sulawesi <br /> and beyond.
        </p>
      </div>

      {/* Hero Image */}
      <div className="flex justify-center">
        <BorderImage>
          <Image
            src="/assets/images/home.webp"
            alt="hero image's line"
            width={720}
            height={384}
            className="rounded-xl"
          />
        </BorderImage>
      </div>

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute -top-10 md:left-16 left-0 -z-30"
      />
      <Image
        src="/assets/vectors/vector2.svg"
        alt="vector 2"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute -top-10 md:right-16 right-0 -z-30"
      />
      <Image
        src="/assets/vectors/vector3.svg"
        alt="vector 3"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute top-36 md:left-28 -z-30"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute top-36 md:right-28 right-0 -z-30"
      />
    </div>
  );
};

export default HeroSection;
