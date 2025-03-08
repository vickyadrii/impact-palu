import Image from "next/image";
import React from "react";

type Partner = {
  partner: string;
};

const PartnerItemCard = ({ partner }: Partner) => {
  return (
    <div>
      <Image src={partner} alt={partner} width={1724} height={1724} />
    </div>
  );
};

export default PartnerItemCard;
