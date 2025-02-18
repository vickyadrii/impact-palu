import { portfolios } from "../constants";
import PortfolioItemCard from "./portfolio-item-card";

const PortfolioCards = () => {
  return (
    <div className="space-y-8">
      {portfolios.map((portfolio) => (
        <PortfolioItemCard key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  );
};

export default PortfolioCards;
