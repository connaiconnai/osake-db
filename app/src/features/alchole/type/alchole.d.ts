export type alcholeType = {
  alchole_name: string;
  genre: string;
  image: string;
  labels: Array<labelType>;
  reviews: Array<reviewType>;
};

type labelType = {
  label: string;
  value: string;
};

type reviewType = {
  author: string;
  content: string;
};
