import { Link } from "react-router-dom";
import { getRandomKey } from "@util/variable";
import { AlcholeType } from "@type/alchole";
import Cell from "./Cell";
import { getAlcholeData } from "../../helper/getFetchData";

export default function List() {
  const alcholeData: AlcholeType[] = getAlcholeData();

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {alcholeData.map((alchole: AlcholeType) => (
          <div className="col-span-1" key={getRandomKey()}>
            <Link to={"detail/" + alchole.alchole_uid}>
              <Cell data={alchole} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
