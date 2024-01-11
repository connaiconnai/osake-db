import { SubmitHandler } from "react-hook-form";
import { AlcholeType } from "@type/alchole";

type Inputs = AlcholeType;
export const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

export const getDefaultValues = (data: AlcholeType | undefined) => {
  if (!data) return null;
  const labels = getArrayValue(data.labels);
  const reviews = getArrayValue(data.reviews);
  const values = {
    alchole_uid: data?.alchole_uid,
    alchole_name: data.alchole_name,
    genre_id: data.genre_id,
    image: data.image,
    ...labels,
    ...reviews,
  };
  return values;
};
const getArrayValue = (array: any) => {
  let result = {};
  array.map((item: any, i: number) => {
    Object.keys(item).map((key) => {
      const key_index = i == 0 ? "" : i + 1;
      result = { ...result, [key + key_index]: item[key] };
    });
  });
  return result;
};
