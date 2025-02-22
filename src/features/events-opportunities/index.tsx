import Image from "next/image";
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

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute md:top-0 -top-6 md:-left-12 -left-4 -z-30"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute md:top-0 -top-4 right-0 -z-30"
      />
      <Image
        src="/assets/vectors/vector5.svg"
        alt="vector 5"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute -bottom-10 md:-right-12 right-0 z-30"
      />
    </div>
  );
};

export default EventsOpportunities;
