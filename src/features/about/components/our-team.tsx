import Image from "next/image";
import { teams } from "../constants";
import OurTeamTitle from "./our-team-title";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OurTeam = () => {
  return (
    <div className="py-10 space-y-8">
      <OurTeamTitle />

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {teams.map((team) => (
            <CarouselItem key={team.id} className="basis-1/2 md:basis-1/3 lg:basis-1/5 space-y-3">
              <Image
                src={team.photo_url}
                alt={team.name}
                width={1107}
                height={1454}
                className="w-full rounded"
                style={{
                  background: team.bg_color,
                }}
              />
              <div>
                <h3 className="font-semibold md:text-lg text-base">{team.name}</h3>
                <p className="text-sm font-semibold text-ip-gray-400">{team.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="md:flex hidden" />
      </Carousel>
    </div>
  );
};

export default OurTeam;
