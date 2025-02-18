import PortfolioCards from "./components/portfolio-cards";
import PortfolioTitle from "./components/portfolio-title";
import ProgramCards from "./components/program-cards";
import ProgramTitle from "./components/program-title";

const Programs = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-12">
        <div>
          <ProgramTitle />
          <ProgramCards />
        </div>

        <PortfolioTitle />
        <PortfolioCards />
      </div>
    </div>
  );
};

export default Programs;
