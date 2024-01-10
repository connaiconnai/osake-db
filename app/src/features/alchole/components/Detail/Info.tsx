import { Paragraph } from "@ui-elements/index";
import { getRandomKey } from "@util/variable";
import { labelType } from "@types/alchole";
import Label from "../common/Label";

export default function Info({
  name,
  labels,
}: {
  name: string;
  labels: labelType[];
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
