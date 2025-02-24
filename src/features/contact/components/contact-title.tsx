import Image from "next/image";

const ContactTitle = () => {
  return (
    <div className="flex flex-col md:items-left gap-4 basis-1/2">
      <div className="relative w-fit">
        <h1 className="md:text-[32px] text-2xl md:leading-10 font-semibold">
          Contact <span className="text-ip-primary-500">us</span>
        </h1>
        <Image
          src="/assets/vectors/line-contact.svg"
          alt="line-portfolio"
          width={25}
          height={2}
          className="absolute right-0"
        />
      </div>
      <p className="max-w-md text-ip-gray-600 md:text-base text-sm">
        Get in touch with us for collaborations, inquiries, or support. We're here to help!
      </p>
    </div>
  );
};

export default ContactTitle;
