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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut? Iure et nemo totam, incidunt fugit tempora
        necessitatibus distinctio nostrum?
      </p>
    </div>
  );
};

export default ProgramTitle;
