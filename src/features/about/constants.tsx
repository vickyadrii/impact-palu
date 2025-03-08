import { TimelineElement } from "@/components/common/timeline/types";
import Image from "next/image";
import { Team } from "./types";

// Data Timeline
export const timelineData: TimelineElement[] = [
  {
    id: 1,
    title: "Local Partner for Inclusive Waste Management Research.",
    date: "2024",
    description:
      "Supporting a collaboration research about the informal recycling sector in Palu, for EU-funded project in informality in Indonesia.",
    status: "pending",
    icon: <Image src="/assets/icons/ic_2024.svg" alt="ic_2024" width={32} height={32} />,
  },
  {
    id: 2,
    title: "Research on Solidarity Economy.",
    date: "2023",
    description:
      "In collaboration with Sasakawa Peace Foundation to conduct pre-research about Social Solidarity Ecomony Organization (SSEOs) in Palu city. Registered as an official incubator under KEMENKOPUKM.",
    status: "pending",
    icon: <Image src="/assets/icons/ic_2023.svg" alt="ic_2023" width={32} height={32} />,
  },
  {
    id: 3,
    title: "Community Engagement Programs.",
    date: "2022",
    description:
      "Conducted a series of webinars about social entrepreneurship business models featuring various prominent social entrepreneurs. Conducted a 101 workshop with local SMEs in Palu to help them develop social business models",
    status: "pending",
    icon: <Image src="/assets/icons/ic_2022.svg" alt="ic_2022" width={32} height={32} />,
  },
  {
    id: 4,
    title: "Launched the First Pilot Project.",
    date: "2020",
    description:
      "Founded to address post-disaster recovery and economic revitalisation in Central Sulawesi through social entrepreneurship ecosystem-building activities. Participated in pilot-testing of The Gender Lens Incubation and Acceleration (GLIA) Toolkit.",
    status: "in-progress",
    icon: <Image src="/assets/icons/ic_2020.svg" alt="ic_2020" width={32} height={32} />,
  },
  {
    id: 5,
    title: "What it all started with.",
    date: "2019",
    description:
      "Impact Palu’s foundational vision began during the co-founder’s participation in the Young Southeast Asian Leaders Initiative (YSEALI) Academic Fellowship Program at Brown University. Collaborating with international peers, the co-founder engaged in workshops on social entrepreneurship and economic development, sparking the blueprint for Impact Palu’s community-driven model.",
    status: "completed",
    icon: <Image src="/assets/icons/ic_2019.svg" alt="ic_2019" width={32} height={32} />,
  },
];

// Team
export const teams: Team[] = [
  {
    id: 1,
    photo_url: "/assets/images/teams/ayi.webp",
    name: "Aulia Rahman",
    title: "Co-Founder",
    bg_color: "#DACFE7",
  },
  {
    id: 2,
    photo_url: "/assets/images/teams/fikri.webp",
    name: "Fikri Aswan",
    title: "Advisor",
    bg_color: "#E9DCBA",
  },
  {
    id: 3,
    photo_url: "/assets/images/teams/abdus.webp",
    name: "Abdus Amiruddin",
    title: "Head of Business Development",
    bg_color: "#D2E3E6",
  },
  {
    id: 4,
    photo_url: "/assets/images/teams/sony.webp",
    name: "Sony Eko Yanuar",
    title: "Head of Programs",
    bg_color: "#E9DCBA",
  },
  {
    id: 5,
    photo_url: "/assets/images/teams/nawir.webp",
    name: "Nawir A Lamanda",
    title: "Research Associate",
    bg_color: "#DACFE7",
  },
  {
    id: 6,
    photo_url: "/assets/images/teams/aisyah.webp",
    name: "Aisyah Putri",
    title: "Research Associate",
    bg_color: "#E9DCBA",
  },
];
