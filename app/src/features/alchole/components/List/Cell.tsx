import { Card } from "@ui-parts/index";
import { getRandomKey } from "@util/variable";
import Label from "../common/Label";
import { AlcholeType } from "@type/alchole";

export default function Cell({ data }: { data: AlcholeType }) {
  return (
    <Card
      image={data.image}
      imageHeight={200}
      head={data.alchole_name}
      body={
        <>
          <div>{data.genre}</div>
          <div data-testid="alchole-label-test">
            {data.labels.map((label) => (
              <div key={getRandomKey()}>
                <Label label={label} />
              </div>
            ))}
          </div>
        </>
      }
    />
  );
}
