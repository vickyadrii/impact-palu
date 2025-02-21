import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Opportunity } from "../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Props = {
  opportunity: Opportunity;
};

const OpportunityItemCard = ({ opportunity }: Props) => {
  return (
    <Card className="bg-white">
      <div className="relative">
        <Image
          src={opportunity.thumbnail_url}
          alt={opportunity.title}
          width={1000}
          height={1000}
          className="rounded-t-xl lg:h-[324px] h-[240px] object-cover"
        />
        <div className="absolute top-0 p-5">
          <Badge variant="upcoming" className="capitalize">
            {opportunity.type}
          </Badge>
        </div>
        <CardHeader className="border-b p-0 mb-3 mx-4 py-3"></CardHeader>
      </div>
      <CardContent className="px-4 space-y-8">
        <div className="space-y-4">
          <h3 className="font-semibold md:text-base text-sm line-clamp-2">{opportunity.title}</h3>

          <div className="space-y-1">
            <p className="capitalize md:text-sm text-xs text-gray-600">{opportunity.type}</p>
            <div className="flex items-center gap-2">
              <Image src="/assets/icons/ic_maps.svg" alt="ic_maps" width={24} height={24} />
              <p className="md:text-sm text-xs text-ip-gray-600">{opportunity.location}</p>
            </div>
          </div>
        </div>

        {/* <p>{!opportunity.price ? "Free" : convertToIDR(opportunity.price)}</p> */}
      </CardContent>
    </Card>
  );
};

export default OpportunityItemCard;
