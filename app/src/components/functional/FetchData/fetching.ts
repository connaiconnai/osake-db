const lamda = import.meta.env.VITE_LAMDA_API;
import { callbackType } from "./callback.d";

type renderChunkType = (
  value: ReadableStreamReadResult<Uint8Array>
) => void | PromiseLike<void>;

export const fetchAlcholeData = async (callback: callbackType) => {
  return fetch(lamda, {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.body?.getReader();
      } else {
        alert("Fail: " + response.status);
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
      alert("Error: " + error.message);
    });
};
