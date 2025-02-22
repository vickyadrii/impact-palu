import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { contacts } from "../constants";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 mt-8">
      {contacts.map((contact) => (
        <Card key={contact.id} className="relative md:space-y-4 space-y-3">
          <CardHeader>
            <div className="bg-ip-primary-400 w-fit sm:p-3 p-2.5 sm:rounded-lg rounded-md">
              <Image src={contact.icon} alt={contact.label} width={24} height={24} className="sm:w-6 sm:h-6 w-4 h-4" />
            </div>
          </CardHeader>
          <CardContent className="sm:space-y-2 space-y-1">
            <CardTitle className="sm:text-xl text-base font-semibold">{contact.label}</CardTitle>
            <CardDescription className="sm:text-base text-xs">{contact.value}</CardDescription>
          </CardContent>

          <Image
            src="/assets/images/card-background.png"
            alt="background card"
            width={620}
            height={293}
            className="w-full h-full absolute top-0 z-10"
          />
        </Card>
      ))}
    </div>
  );
};

export default ContactUs;
