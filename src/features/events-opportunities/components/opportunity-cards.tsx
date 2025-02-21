import { opportunities } from "../constants";
import OpportunitiyItemCard from "./opportunity-item-card";

const OpportunityCard = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold md:text-xl text-lg">OPPORTUNITIES</h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
        {opportunities.map((opportunity) => (
          <OpportunitiyItemCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
};

export default OpportunityCard;
