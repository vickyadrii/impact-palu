import Image from "next/image";

const ProgramTitle = () => {
  return (
    <div className="md:text-center flex flex-col md:items-center gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Our <span className="text-ip-primary-500">Programs</span>
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
        Our Programs provide tailored support, mentorship, and opportunities to help individuals and organizations grow,
        innovate, and create a lasting impact.
      </p>
    </div>
  );
};

export default ProgramTitle;
