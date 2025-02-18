import React from "react";
import ProgramTitle from "./program-title";
import ProgramCards from "./program-cards";
import Image from "next/image";

const OurPrograms = () => {
  return (
    <div className="relative">
      <ProgramTitle />
      <ProgramCards />

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute top-0 md:-left-12 left-0 -z-30"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute top-2 md:right-0 right-0 z-30"
      />

      <Image
        src="/assets/vectors/vector5.svg"
        alt="vector 5"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute -bottom-16 md:-right-12 right-0 z-30"
      />
    </div>
  );
};

export default OurPrograms;
