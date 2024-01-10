import { useParams } from "react-router-dom";
import { alcholeType } from "@type/alchole";
import Form from "./Form";
import { filterAlcholeData } from "../../helper/getFetchData";

export default function Edit() {
  const { uid } = useParams();
  const data: alcholeType | undefined = filterAlcholeData(uid);

  return (
    <>
      <div>Edit</div>
      <Form data={data} />
    </>
  );
}
