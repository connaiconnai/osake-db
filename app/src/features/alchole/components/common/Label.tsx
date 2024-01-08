import { labelType } from "../../type/alchole";

export default function Label({ label }: { label: labelType }) {
  return (
    <div className="flex">
      {label.label}
      <span>：</span>
      {label.value}
    </div>
  );
}
