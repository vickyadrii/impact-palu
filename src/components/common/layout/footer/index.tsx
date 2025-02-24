import Image from "next/image";
import { footer } from "./constants";
import Link from "next/link";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <div className="border-t border-dashed">
        <div className="container mx-auto px-5 py-10">
          <div className="grid md:grid-cols-4 gap-10">
            <Image
              src="/assets/images/impactpalu_logo.webp"
              alt="impact palu logo"
              width={112}
              height={60}
              className="md:w-28 w-20 h-fit"
            />

            {/* Resources */}
            <div className="md:space-y-2 space-y-1">
              <h3 className="md:text-xl font-semibold">{footer.resources.title}</h3>
              <ul className="space-y-0.5">
                {footer.resources.data.map((resource) => (
                  <li key={resource.value} className="md:text-base text-sm text-ip-gray-600">
                    <Link href={resource.value}>{resource.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="md:space-y-2 space-y-1">
              <h3 className="md:text-xl font-semibold">{footer.social_media.title}</h3>
              <ul className="space-y-0.5">
                {footer.social_media.data.map((resource) => (
                  <li key={resource.value} className="md:text-base text-sm text-ip-gray-600">
                    <Link href={resource.value} target="_blank">
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:space-y-2 space-y-1">
              <h3 className="md:text-xl font-semibold">{footer.contact.title}</h3>
              <ul className="space-y-0.5">
                {footer.contact.data.map((resource, index) => (
                  <li key={index} className="md:text-base text-sm text-ip-gray-600">
                    {!resource.is_location && resource.value ? (
                      <Link href={resource.value} target="_blank">
                        {resource.label}
                      </Link>
                    ) : (
                      <p>{resource.label}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-ip-primary-800 text-white">
        <div className="md:p-8 p-5">
          <p className="md:text-sm text-xs text-center">
            Copyright {date.getFullYear()} © Impact Palu, <span className="italic">All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
