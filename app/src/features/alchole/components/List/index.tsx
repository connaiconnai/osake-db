import Cell from "./Cell";
import { getRandomKey } from "@util/variable";
import { fetchAlcholeData } from "../../helper/index";

export default function List() {
  const alcholeData = fetchAlcholeData();

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-6">
        {alcholeData.map((alchole) => (
          <div className="col-span-1" key={getRandomKey()}>
            <Cell data={alchole} />
          </div>
        ))}
      </div>
    </>
  );
}
