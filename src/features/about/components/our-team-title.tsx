import Image from "next/image";

const OurTeamTitle = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Meet <span className="text-ip-primary-500">Our Team</span>
        </h1>
        <Image
          src="/assets/vectors/line-timeline.svg"
          alt="line-timeline"
          width={138}
          height={2}
          className="absolute right-0"
        />
      </div>
      <p className="max-w-3xl mx-auto text-ip-gray-600 md:text-base text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed arcu sollicitudin, ultricies dolor a, lacinia
        quam.
      </p>
    </div>
  );
};

export default OurTeamTitle;
