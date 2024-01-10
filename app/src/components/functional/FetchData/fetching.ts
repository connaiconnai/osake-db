const lamda = import.meta.env.VITE_LAMDA_API;

export const fetchAlcholeData = async (callback) => {
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
      // ReadableStream.read()はPromiseを返す。
      // Promiseは{ done, value }として解決される。
      // データを読み込んだとき：doneはfalse, valueは値。
      // データを読み込み終わったとき：doneはtrue, valueはundefined。
      const readChunk = ({ done, value }: { done: boolean; value: any }) => {
        if (done) {
          // 読み込みが終わっていれば最終的なテキストを表示する。
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

        // 次の値を読みにいく。
        reader.read().then(readChunk);
      };

      // 最初の値を読み込む。
      reader.read().then(readChunk);
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
};
