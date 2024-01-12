import { SubmitHandler } from "react-hook-form";
import { AlcholeType } from "@type/alchole";

type renderChunkType = (
  value: ReadableStreamReadResult<Uint8Array>
) => void | PromiseLike<void>;

type Inputs = AlcholeType;
export const onSubmit: SubmitHandler<Inputs> = (data: any) => {
  const lamda = import.meta.env.VITE_LAMDA_API;
  return fetch(lamda, {
    method: "POST",
    body: JSON.stringify({ formData: data }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.body?.getReader();
      } else {
        console.error("Fail: " + response.status);
      }
    })
    .then((reader) => {
      let veryLongText = "";
      const decoder = new TextDecoder();
      const readChunk: renderChunkType = ({ done, value }) => {
        if (done) {
          const res = JSON.parse(veryLongText);
          if (res.statusCode == 200) {
            console.log(res);
          }
          if (res.errorMessage) {
            console.error("Fail: " + res.errorMessage);
          }
          return;
        }

        veryLongText += decoder.decode(value);
        reader?.read().then(readChunk);
      };

      reader?.read().then(readChunk);
    })
    .catch((error) => {
      console.error("Error: " + error.message);
    });
};

const translatePostData = (data) => {
  const label_key = ["label", "label_value"];
  const label_keys = Object.keys(data).filter((key) => label_key.includes(key));
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
