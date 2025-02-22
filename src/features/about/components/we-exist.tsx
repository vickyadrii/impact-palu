import Image from "next/image";
import BorderImage from "@/components/ui/border-image";

const WeExist = () => {
  return (
    <div id="we-exist" className="relative md:my-24 my-20">
      <div className="flex lg:flex-row flex-col items-center justify-between gap-12">
        <div className="relative basis-1/2">
          <BorderImage>
            <Image
              src="/assets/images/we-exist.webp"
              alt="hero image's line"
              width={720}
              height={384}
              className="rounded-xl"
            />
          </BorderImage>

          <Image
            src="/assets/vectors/vector2.svg"
            alt="vector 2"
            width={62}
            height={31}
            className="md:w-[62px] w-10 absolute md:-top-6 -top-4 md:-right-6 -right-4 -z-50"
          />
        </div>

        <div className="basis-1/2 md:space-y-3 space-y-2">
          <h3 className="md:text-2xl text-xl font-semibold text-ip-primary-500">Why are We Exist?</h3>
          <p className="text-ip-gray-600 md:text-base text-sm">
            At Impact Palu, we believe that social enterprises will develop a sustainable solution for social and
            environmental problems in Palu and beyond. By supporting aspiring social entrepreneurs with capacity
            building programs and connecting them with pertinent stakeholders, it will achieve a sustainable and greater
            impact.
          </p>
        </div>
      </div>

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute md:-top-12 -top-8 md:-left-12 -left-8 -z-50"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 md:block hidden absolute top-14 right-0 -z-50"
      />
      <Image
        src="/assets/vectors/vector5.svg"
        alt="vector 5"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute md:bottom-0 md:block hidden right-0 z-30"
      />
    </div>
  );
};

export default WeExist;
