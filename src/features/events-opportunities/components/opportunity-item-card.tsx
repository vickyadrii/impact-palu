import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Opportunity } from "../types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

type Props = {
  opportunity: Opportunity;
};

const OpportunityItemCard = ({ opportunity }: Props) => {
  return (
    <>
      <Dialog>
        {/* Dialog Trigger before open the modal */}
        <DialogTrigger asChild>
          <Card className="bg-white cursor-pointer">
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
            </CardContent>
          </Card>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent className="w-11/12 sm:max-w-4xl mx-auto p-5">
          <DialogHeader className="space-y-6">
            <div className="space-y-2">
              <DialogTitle>{opportunity.title}</DialogTitle>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image src="/assets/icons/ic_maps.svg" alt="ic_maps" width={24} height={24} />
                  <p className="md:text-sm text-xs text-ip-gray-600">{opportunity.location}</p>
                </div>
                <Badge variant="secondary" className="capitalize">
                  {opportunity.type}
                </Badge>
              </div>
            </div>

            <div className="space-y-1">
              <p className="md:text-base text-sm font-semibold">About this opportunity:</p>
              <ul className="list-disc pl-5">
                {opportunity.description.map((data, index) => (
                  <li key={index} className="text-ip-gray-600 md:text-sm text-xs">
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-end mt-4">
            <Button type="button" asChild>
              <Link href={opportunity.link_registration} target="_blank">
                Apply now
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OpportunityItemCard;
