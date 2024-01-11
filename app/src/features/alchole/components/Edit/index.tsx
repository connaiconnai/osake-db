import { useParams } from "react-router-dom";
import { AlcholeType } from "@type/alchole";
import Form from "./Form";
import { filterAlcholeData } from "../../helper/getFetchData";

export default function Edit() {
  const { uid } = useParams();
  const data: AlcholeType | undefined = filterAlcholeData(uid);

  return (
    <>
      <Form data={data} />
    </>
  );
}
