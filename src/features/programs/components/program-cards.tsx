import { programs } from "../constants";
import ProgramItemCard from "./program-item-card";

const ProgramCards = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 mt-8">
      {programs.map((program) => (
        <ProgramItemCard key={program.id} program={program} />
      ))}
    </div>
  );
};

export default ProgramCards;
