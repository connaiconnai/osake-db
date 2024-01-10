import { useParams } from "react-router-dom";
import { Image } from "@ui-elements/index";
import { alcholeType } from "@type/alchole";
import Reviews from "./Reviews";
import Info from "./Info";
import { filterAlcholeData } from "../../helper/getFetchData";

export default function Detail() {
  const { uid } = useParams();
  const data: alcholeType | undefined = filterAlcholeData(uid);
  if (!data)
    return (
      <>
        <div className="w-full text-center">not found</div>
      </>
    );

  return (
    <>
      <div className="md:flex md:gap-6 w-full">
        <div className="md:w-1/3 md:min-w-[300px]">
          <Image src={data.image} />
        </div>
        <div className="mt-12 md:mt-0">
          <Info name={data.alchole_name} labels={data.labels} />
          <div className="mt-12" />
          <Reviews reviews={data.reviews} />
        </div>
      </div>
    </>
  );
}
