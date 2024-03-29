export type AlcholeType = {
  alchole_uid: string;
  alchole_name: string;
  genre: string;
  genre_id: string;
  image?: string;
  labels: LabelType[];
  reviews: ReviewType[];
};

export type LabelType = {
  label: string;
  label_value: string;
};

export type ReviewType = {
  author: string;
  content: string;
};

export type AlcholeFormType = {
  alchole_uid?: string;
  alchole_name?: string;
  genre_id?: string;
  image?: string;
  label?: string;
  label_value?: string;
  author?: string;
  content?: string;
};
