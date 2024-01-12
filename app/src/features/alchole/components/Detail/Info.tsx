import { Paragraph } from "@ui-elements/index";
import { getRandomKey } from "@util/variable";
import { LabelType } from "@type/alchole";
import Label from "../common/Label";

export default function Info({
  name,
  labels,
}: {
  name: string;
  labels: LabelType[];
}) {
  return (
    <>
      <div className="text-xl">{name}</div>
      <div className="mt-4" data-testid="alchole-label-test">
        <Paragraph>
          {labels.map((label) => (
            <div key={getRandomKey()}>
              <Label label={label} />
            </div>
          ))}
        </Paragraph>
      </div>
    </>
  );
}
