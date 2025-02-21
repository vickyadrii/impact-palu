import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Event } from "../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { convertToIDR } from "@/lib/utils";

type Props = {
  event: Event;
};

const EventItemCard = ({ event }: Props) => {
  return (
    <Card className="bg-white">
      <div>
        <Image src={event.thumbnail_url} alt={event.title} width={1000} height={1000} className="rounded-t-xl" />
      </div>
      <CardHeader className="border-b p-0 mb-3 mx-4 py-3">
        <Badge variant={event.status} className="capitalize">
          {event.status}
        </Badge>
      </CardHeader>
      <CardContent className="px-4 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold md:text-base text-sm line-clamp-2">{event.title}</h3>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Image src="/assets/icons/ic_maps.svg" alt="ic_maps" width={24} height={24} />
              <p className="md:text-sm text-xs text-ip-gray-600">{event.location}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/assets/icons/ic_time.svg" alt="ic_time" width={24} height={24} />
              <p className="md:text-sm text-xs text-ip-gray-600">{event.date}</p>
            </div>
          </div>
        </div>

        <p>{!event.price ? "Free" : convertToIDR(event.price)}</p>
      </CardContent>
    </Card>
  );
};

export default EventItemCard;
