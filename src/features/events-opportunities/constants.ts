import { Event, Opportunity } from "./types";

export const events: Event[] = [
  {
    id: 1,
    thumbnail_url: "/assets/images/events/event1.webp",
    status: "upcoming",
    title: "Circular Economy in Action #1. The Untapped Potential for Businesses in the Waste Managing the business.",
    location: "The Gade Tower, Jln. Cempedak, Palu Barat",
    date: "Kamis, 14 Oktober 2024",
    price: 99000,
    link_registration: "https://google.com",
  },
  {
    id: 2,
    thumbnail_url: "/assets/images/events/event1.webp",
    status: "upcoming",
    title: "Circular Economy in Action #1. The Untapped Potential for Businesses in the Waste Managing the business.",
    location: "The Gade Tower, Jln. Cempedak, Palu Barat",
    date: "Kamis, 14 Oktober 2024",
    price: 0,
    link_registration: "https://google.com",
  },
  {
    id: 3,
    thumbnail_url: "/assets/images/events/event1.webp",
    status: "passed",
    title: "Circular Economy in Action #1. The Untapped Potential for Businesses in the Waste Managing the business.",
    location: "The Gade Tower, Jln. Cempedak, Palu Barat",
    date: "Kamis, 14 Oktober 2024",
    price: 99000,
    link_registration: "https://google.com",
  },
];

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
