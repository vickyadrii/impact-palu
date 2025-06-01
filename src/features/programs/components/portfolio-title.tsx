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
        We are committed to creating lasting environmental impact across Southeast Asia, with a special focus on Eastern
        Indonesia, by developing a dynamic portfolio of innovative ventures and programs. Our initiatives span
        sustainable resource management, circular economy solutions, and scalable environmental technologies—delivering
        measurable impact and strong growth potential for our partners and investors.
      </p>
    </div>
  );
};

export default PortfolioTitle;
