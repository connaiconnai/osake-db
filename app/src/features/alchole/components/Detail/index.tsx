import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import Info from "./Info";
import { alcholeType } from "../../type/alchole";
import { fetchAlcholeData } from "../../helper/index";

export default function Detail() {
  const { uid } = useParams();
  const data: alcholeType = fetchAlcholeData(uid);

  return (
    <>
      <img src={data.image} alt="" />
      <Info name={data.alchole_name} labels={data.labels} />
      <div className="mt-12" />
      <Reviews reviews={data.reviews} />
    </>
  );
}
