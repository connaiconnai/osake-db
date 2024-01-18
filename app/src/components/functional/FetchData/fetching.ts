const lambda = import.meta.env.VITE_LAMBDA_API;
import { callbackType } from "./callback.d";

type renderChunkType = (
  value: ReadableStreamReadResult<Uint8Array>
) => void | PromiseLike<void>;

export const fetchAlcholeData = async (callback: callbackType) => {
  console.log(lambda);
  return fetch(lambda, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.body?.getReader();
      } else {
        console.log(response);
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
            callback(res.body.data);
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
