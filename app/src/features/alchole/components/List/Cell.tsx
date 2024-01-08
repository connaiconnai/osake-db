import { Card } from "@ui-parts/index";
import { getRandomKey } from "@util/variable";
import Label from "../common/Label";
import { alcholeType } from "../../type/alchole";

export default function Cell({ data }: { data: alcholeType }) {
  return (
    <Card
      image={data.image}
      imageHeight={200}
      head={data.alchole_name}
      body={
        <>
          <span className="block">{data.genre}</span>
          <span className="block">
            {data.labels.map((label) => (
              <span key={getRandomKey()}>
                <Label label={label} />
              </span>
            ))}
          </span>
        </>
      }
    />
  );
}
