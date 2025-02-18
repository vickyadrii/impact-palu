import PortfolioCards from "./components/portfolio-cards";
import PortfolioTitle from "./components/portfolio-title";
import ProgramCards from "./components/program-cards";
import ProgramTitle from "./components/program-title";

const Programs = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col gap-16">
        <div>
          <ProgramTitle />
          <ProgramCards />
        </div>

        <div>
          <PortfolioTitle />
          <PortfolioCards />
        </div>
      </div>
    </div>
  );
};

export default Programs;
