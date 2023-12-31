import { Link } from "react-router-dom";
import Cell from "./Cell";
import { getRandomKey } from "@util/variable";
import { alcholeType } from "../../type/alchole";
import { fetchAlcholeData } from "../../helper/index";

export default function List() {
  const alcholeData: any = fetchAlcholeData();

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-6">
        {alcholeData.map((alchole: alcholeType) => (
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
