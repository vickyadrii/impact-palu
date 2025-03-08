import OurPrograms from "./components/our-programs";
import OurPortfolios from "./components/our-portfolios";
import OurPartners from "./components/our-partners";

const Programs = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-16">
        <OurPrograms />
        <OurPortfolios />
        <OurPartners />
      </div>
    </div>
  );
};

export default Programs;
