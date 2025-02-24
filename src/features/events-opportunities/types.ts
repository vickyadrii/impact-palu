export type Event = {
  id: number;
  thumbnail_url: string;
  status: "default" | "secondary" | "destructive" | "upcoming" | "passed" | "outline";
  title: string;
  description: string;
  location: string;
  date: string;
  price: number;
  link_registration: string;
};

export type Opportunity = {
  id: number;
  thumbnail_url: string;
  type: string;
  title: string;
  description: string[];
  location: string;
  link_registration: string;
};
