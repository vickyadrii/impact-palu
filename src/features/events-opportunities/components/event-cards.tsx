import { events } from "../constants";
import EventItemCard from "./event-item-card";

const EventCards = () => {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold md:text-xl text-lg">EVENTS</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6">
        {events.map((event) => (
          <EventItemCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventCards;
