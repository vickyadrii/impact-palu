import { TimelineLayout } from "@/components/common/timeline";
import { timelineData } from "../constants";
import Image from "next/image";
import IpTimelineTitle from "./ip-timeline-title";

const IpTimeline = () => {
  return (
    <div className="relative md:bg-ip-gray-200 md:px-12 md:py-20 py-5 md:rounded-3xl rounded-xl">
      <div>
        <IpTimelineTitle />
        <TimelineLayout items={timelineData} size="md" animate={true} />
      </div>

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute md:top-6 -top-8 md:left-8 -left-8"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 md:block hidden absolute top-14 right-8"
      />
      <Image
        src="/assets/vectors/vector5.svg"
        alt="vector 5"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute right-6 bottom-7 md:block hidden right-0"
      />
    </div>
  );
};

export default IpTimeline;
