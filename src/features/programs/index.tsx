import OurPrograms from "./components/our-programs";
import OurPortfolios from "./components/our-portfolios";

const Programs = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-16">
        <OurPrograms />
        <OurPortfolios />
      </div>
    </div>
  );
};

export default Programs;
