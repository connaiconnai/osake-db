import { Card } from "@ui-parts/index";
import { getRandomKey } from "@util/variable";
import { alcholeType } from "../../type/alchole";

export default function Cell({ data }: { data: alcholeType }) {
  return (
    <Card
      image={data.image}
      head={data.alchole_name}
      body={
        <>
          <span className="block">{data.genre}</span>
          <span className="block">
            {data.labels.map((label) => (
              <span className="flex" key={getRandomKey()}>
                {label.label}
                <span>：</span>
                {label.value}
              </span>
            ))}
          </span>
        </>
      }
    />
  );
}
