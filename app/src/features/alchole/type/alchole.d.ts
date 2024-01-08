export type alcholeType = {
  alchole_uid: string;
  alchole_name: string;
  genre: string;
  image?: string;
  labels: labelType[];
  reviews: reviewType[];
};

export type labelType = {
  label: string;
  value: string;
};

export type reviewType = {
  author: string;
  content: string;
};
