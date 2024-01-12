import { Card } from "@ui-parts/index";
import { getRandomKey } from "@util/variable";
import { AlcholeType } from "@type/alchole";
import { getGenre } from "../../helper/variable";
import Label from "../common/Label";

export default function Cell({ data }: { data: AlcholeType }) {
  return (
    <Card
      image={data.image}
      imageHeight={200}
      head={data.alchole_name}
      body={
        <>
          <div>{getGenre(data.genre_id)}</div>
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
