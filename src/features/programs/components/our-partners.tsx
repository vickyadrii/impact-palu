"use client";

import { partners } from "../constants";
import PartnerItemCard from "./partner-item-card";
import PartnerTitle from "./partner-title";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const OurPartners = () => {
  return (
    <div className="space-y-3">
      <PartnerTitle />

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-[14.2857%]">
              <PartnerItemCard partner={partner} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="md:flex hidden" />
      </Carousel>

      <div></div>
    </div>
  );
};

export default OurPartners;
