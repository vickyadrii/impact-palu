import Image from "next/image";

const TitleSection = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Events & <span className="text-ip-primary-500">Opportunities</span>
        </h1>
        <Image
          src="/assets/vectors/line-events.svg"
          alt="line-events"
          width={198}
          height={2.78}
          className="absolute right-0"
        />
      </div>
      <p className="text-ip-gray-600 md:text-base text-sm">
        Our Events & Opportunities platform serves as a dynamic hub for social entrepreneurs, investors, and ecosystem
        enablers, facilitating collaboration, knowledge exchange, and business development.
      </p>
    </div>
  );
};

export default TitleSection;
