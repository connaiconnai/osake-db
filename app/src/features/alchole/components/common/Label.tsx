import { LabelType } from "@type/alchole";

export default function Label({ label }: { label: LabelType }) {
  return (
    <div className="flex">
      {label.label}
      <span>：</span>
      {label.label_value}
    </div>
  );
}
