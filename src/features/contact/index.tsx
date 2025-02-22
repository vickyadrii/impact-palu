import Image from "next/image";
import ContactForm from "./components/contact-form";
import ContactTitle from "./components/contact-title";
import ContactUs from "./components/contact-us";

const Contact = () => {
  return (
    <div className="relative container mx-auto px-5 md:py-16 py-5 lg:space-y-20">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-20 gap-8">
        <ContactTitle />
        <ContactForm />
      </div>

      <ContactUs />

      {/* Vectors */}
      <Image
        src="/assets/vectors/vector1.svg"
        alt="vector 1"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute lg:-top-20 -top-8 lg:-left-8 left-0 -z-30"
      />
      <Image
        src="/assets/vectors/vector4.svg"
        alt="vector 4"
        width={62}
        height={31}
        className="md:w-[62px] w-10 absolute lg:-top-20 -top-8 right-0 -z-30"
      />
    </div>
  );
};

export default Contact;
