export type ResourceSocialMedia = {
  label: string;
  value: string;
};

export type Contact = {
  label: string;
  value?: string;
  is_location: boolean;
};

export type Footer = {
  resources: {
    title: string;
    data: ResourceSocialMedia[];
  };
  social_media: {
    title: string;
    data: ResourceSocialMedia[];
  };
  contact: {
    title: string;
    data: Contact[];
  };
};
