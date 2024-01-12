import { imageType } from "./Image.d";

const host = import.meta.env.VITE_APP_URL;

export default function Image({ src = "" }: imageType) {
  if (src === "") return null;

  return (
    <>
      <img src={`${host}${src}`} alt="" />
    </>
  );
}
