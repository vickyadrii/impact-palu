import Image from "next/image";

const PortfolioTitle = () => {
  return (
    <div className="flex flex-col md:items-left gap-4">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Our <span className="text-ip-primary-500">Portfolio</span>
        </h1>
        <Image
          src="/assets/vectors/line-portfolio.svg"
          alt="line-portfolio"
          width={143}
          height={2}
          className="absolute right-0"
        />
      </div>
      <p className="text-ip-gray-600 md:text-base text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut? Iure et nemo totam, incidunt fugit tempora
        necessitatibus distinctio nostrum?
      </p>
    </div>
  );
};

export default PortfolioTitle;
