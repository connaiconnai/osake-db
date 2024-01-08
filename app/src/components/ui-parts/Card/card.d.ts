import { ReactNode } from "react";

export type CardType = {
  image?: string;
  head: string | ReactNode;
  body: string | ReactNode;
  imageHeight?: number;
};
