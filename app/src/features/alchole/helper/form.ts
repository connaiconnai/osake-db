import { SubmitHandler } from "react-hook-form";
import {
  AlcholeType,
  LabelType,
  ReviewType,
  AlcholeFormType,
} from "@type/alchole";

type Inputs = AlcholeType;
export const onSubmit: SubmitHandler<Inputs> = (data: AlcholeFormType) => {
  const lambda = import.meta.env.VITE_LAMBDA_API;
  const formData = translatePostData(data);
  fetch(lambda, {
    method: "POST",
    body: JSON.stringify({ formData }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return;
      } else {
        console.error("Fail: " + response.status);
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

const translatePostData = (data: AlcholeFormType) => {
  const prev_data = { ...data };
  const translate = (key_set: string[]) => {
    const keys = getArrayValueKeys(data, key_set[0]);
    const keys_length = keys.length;
    deleteArrayValue(prev_data, key_set, keys_length);
    const push_data = translateArray(data, key_set, keys_length);
    return push_data;
  };

  const label_key_set = ["label", "label_value"];
  const labels = translate(label_key_set);

  const review_key_set = ["author", "content"];
  const reviews = translate(review_key_set);

  const result = {
    ...prev_data,
    labels,
    reviews,
  };
  return result;
};

const translateArray = (
  data: AlcholeFormType,
  key_set: string[],
  length: number
) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    const index_key = i == 1 ? "" : i;
    let values = {};
    key_set.map((key: string) => {
      const push_data = data[(key + index_key) as keyof typeof data];
      if (push_data) values = { ...values, [key]: push_data };
    });

    if (Object.keys(values).length) result.push(values);
  }
  return result;
};

const deleteArrayValue = (
  data: AlcholeFormType,
  key_set: string[],
  length: number
) => {
  for (let i = 1; i <= length; i++) {
    const index_key = i == 1 ? "" : i;
    key_set.map((key: string) => {
      delete data[(key + index_key) as keyof typeof data];
    });
  }
  return data;
};

const getArrayValueKeys = (data: AlcholeFormType, array_key: string) => {
  const pattern = new RegExp("^" + array_key + "\\d*$");
  const array_value_keys = Object.keys(data)
    .map((key) => (key.match(pattern) ? key : ""))
    .filter((v) => v);
  return array_value_keys;
};

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

const getArrayValue = (array: LabelType[] | ReviewType[]) => {
  let result = {};
  array.map((item: any, i: number) => {
    Object.keys(item).map((key) => {
      const key_index = i == 0 ? "" : i + 1;
      const value = item[key];
      result = { ...result, [key + key_index]: value };
    });
  });
  return result;
};
