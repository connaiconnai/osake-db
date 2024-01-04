import { labelType } from "../../type/alchole";

export default function Label({ label }: { label: labelType }) {
  return (
    <span className="flex">
      {label.label}
      <span>：</span>
      {label.value}
    </span>
  );
}
