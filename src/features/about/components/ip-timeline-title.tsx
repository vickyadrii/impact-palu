import Image from "next/image";

const IpTimelineTitle = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Impact Palu <span className="text-ip-primary-500">Over the Year</span>
        </h1>
        <Image
          src="/assets/vectors/line-timeline.svg"
          alt="line-timeline"
          width={196}
          height={2}
          className="absolute right-0"
        />
      </div>
      <p className="max-w-3xl mx-auto text-ip-gray-600 md:text-base text-sm">
        We are dedicated to empowering communities and fostering sustainable development in Eastern Indonesia.
      </p>
    </div>
  );
};

export default IpTimelineTitle;
