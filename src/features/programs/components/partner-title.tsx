import Image from "next/image";

const PartnerTitle = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Our <span className="text-ip-primary-500">Partners</span>
        </h1>
        <Image
          src="/assets/vectors/line-program.svg"
          alt="line-program"
          width={143}
          height={2}
          className="absolute right-0"
        />
      </div>
      <p className="max-w-3xl mx-auto text-ip-gray-600 md:text-base text-sm">
        Here are our partners who have helped us in our journey to make a positive impact on the environment.
      </p>
    </div>
  );
};

export default PartnerTitle;
