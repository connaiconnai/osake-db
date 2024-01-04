import { Typography } from "@mui/material";
import { getRandomKey } from "@util/variable";
import { labelType } from "../../type/alchole";
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
      <div className="mt-4">
        <Typography color="text.secondary">
          {labels.map((label) => (
            <span key={getRandomKey()}>
              <Label label={label} />
            </span>
          ))}
        </Typography>
      </div>
    </>
  );
}
