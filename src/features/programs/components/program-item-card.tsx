import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Program } from "../types";
import Image from "next/image";

type Props = {
  program: Program;
};

const ProgramItemCard = ({ program }: Props) => {
  return (
    <Card key={program.id} className={`relative space-y-4 ${program.id === 1 && "bg-ip-primary-800"}`}>
      <CardHeader>
        <div className="bg-ip-primary-400 w-fit p-3 rounded-lg">
          <Image src={program.icon} alt={program.title} width={24} height={24} className="sm:w-6 sm:h-6 w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent className="sm:space-y-3 space-y-2">
        <CardTitle className={`sm:text-xl text-base font-semibold ${program.id === 1 && "text-white"}`}>
          {program.title}
        </CardTitle>
        <CardDescription className={`sm:text-base text-xs ${program.id === 1 && "text-white"}`}>
          {program.description}
        </CardDescription>
      </CardContent>

      <Image
        src="/assets/images/card-background.png"
        alt="background card"
        width={620}
        height={293}
        className="w-full h-full absolute top-0 z-10"
      />
    </Card>
  );
};

export default ProgramItemCard;
