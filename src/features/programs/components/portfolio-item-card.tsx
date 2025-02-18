import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Portfolio } from "../types";
import Image from "next/image";

type Props = {
  portfolio: Portfolio;
};

const PortfolioItemCard = ({ portfolio }: Props) => {
  return (
    <Card className="relative border border-ip-primary-500 md:rounded-2xl">
      <CardHeader>
        <Image src={portfolio.logo} alt={portfolio.title} width={96} height={96} />
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>{portfolio.description}</CardDescription>
      </CardContent>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-5 px-5">
        {portfolio.images.map((data, index) => (
          <div
            key={index}
            className="md:px-8 px-5 md:pt-6 pt-5 md:pb-0 pb-5 md:rounded-t-2xl md:rounded-none rounded-md bg-ip-primary-800"
          >
            <Image
              src={data}
              alt={`${portfolio.title}'s images`}
              width={327}
              height={327}
              className="w-full h-full md:rounded-t-2xl md:rounded-none rounded-md"
            />
          </div>
        ))}
      </div>

      <Image
        src="/assets/images/background.webp"
        alt="background card"
        width={620}
        height={293}
        className="w-full h-full absolute top-0 z-10"
      />
    </Card>
  );
};

export default PortfolioItemCard;
