import { Event, Opportunity } from "./types";

// Data Events
export const events: Event[] = [
  {
    id: 1,
    thumbnail_url: "/assets/images/events/event1.webp",
    status: "passed", // upcoming | passed
    title: "Webinar Series #8: Sustainable Business",
    description: "A look at how innovation in eco-friendly products is shaping the future of consumption.",
    location: "Via Zoom",
    date: "Rabu, 26 Oktober 2022",
    price: 0,
    link_registration: "https://google.com",
  },
  {
    id: 2,
    thumbnail_url: "/assets/images/events/event2.webp",
    status: "passed",
    title: "Temu Usaha Sosial #2",
    description: "Get your coffee, connect and learn about sustainable living with Hannah Indonesia.",
    location: "Via Zoom",
    date: "Sabtu, 08 Oktober 2022",
    price: 0,
    link_registration: "https://google.com",
  },
  {
    id: 3,
    thumbnail_url: "/assets/images/events/event3.webp",
    status: "passed",
    title: "Social Enterprise 101 Workshop",
    description: "Understanding social enterprises and their difference with traditional businesses.",
    location: "Via Zoom",
    date: "Sabtu, 27 Agustus 2022",
    price: 0,
    link_registration: "https://google.com",
  },
  {
    id: 4,
    thumbnail_url: "/assets/images/events/event4.webp",
    status: "passed",
    title: "Circular Economy in Action #1",
    description: "The untapped potential of business in the waste management and recycling sectors.",
    location: "Via Zoom",
    date: "Kamis, 11 Agustus 2022",
    price: 0,
    link_registration: "https://google.com",
  },
];

// Data Opportunities
export const opportunities: Opportunity[] = [
  {
    id: 1,
    thumbnail_url: "/assets/images/opportunities/op1.webp",
    title: "Menjadi Volunteer Hari Kemerdekaan Indonesia, panitia Public Relation",
    description: [
      "Write and edit copy for various marketing materials, including website content, social media posts, email newsletters, Help Center articles, and other internal and ad-hoc projects.",
      "Collaborate with cross-functional teams, including Product and Market Managers, to ensure the copy aligns with their needs.",
      "Actively participate in content team projects, including location services, general content audits, wiki page management, and content database optimization.",
    ],
    type: "volunteer",
    location: "Palu, Sulawesi Tengah",
    link_registration: "https://google.com",
  },
  {
    id: 2,
    thumbnail_url: "/assets/images/opportunities/op1.webp",
    title: "Menjadi CPNS Hari Kemerdekaan Indonesia, panitia Public Relation",
    description: [
      "Write and edit copy for various marketing materials, including website content, social media posts, email newsletters, Help Center articles, and other internal and ad-hoc projects.",
      "Collaborate with cross-functional teams, including Product and Market Managers, to ensure the copy aligns with their needs.",
      "Actively participate in content team projects, including location services, general content audits, wiki page management, and content database optimization.",
    ],
    type: "volunteer",
    location: "Palu, Sulawesi Tengah",
    link_registration: "https://google.com",
  },
  {
    id: 3,
    thumbnail_url: "/assets/images/opportunities/op1.webp",
    title: "Menjadi TKP Hari Kemerdekaan Indonesia, panitia Public Relation",
    description: [
      "Write and edit copy for various marketing materials, including website content, social media posts, email newsletters, Help Center articles, and other internal and ad-hoc projects.",
      "Collaborate with cross-functional teams, including Product and Market Managers, to ensure the copy aligns with their needs.",
      "Actively participate in content team projects, including location services, general content audits, wiki page management, and content database optimization.",
    ],
    type: "volunteer",
    location: "Palu, Sulawesi Tengah",
    link_registration: "https://google.com",
  },
];
