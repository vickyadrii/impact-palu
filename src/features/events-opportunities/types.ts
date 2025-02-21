export type Event = {
  id: number;
  thumbnail_url: string;
  status: "default" | "secondary" | "destructive" | "upcoming" | "passed" | "outline";
  title: string;
  location: string;
  date: string;
  price: number;
};

export type Opportunity = {
  id: number;
  thumbnail_url: string;
  type: string;
  title: string;
  location: string;
};
