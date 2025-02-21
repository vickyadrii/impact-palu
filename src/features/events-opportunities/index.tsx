import EventCards from "./components/event-cards";
import OpportunityCard from "./components/opportunity-cards";
import TitleSection from "./components/title-section";

const EventsOpportunities = () => {
  return (
    <div className="relative container mx-auto p-5">
      <TitleSection />

      <div className="space-y-12 mt-8">
        <EventCards />
        <OpportunityCard />
      </div>
    </div>
  );
};

export default EventsOpportunities;
