import { Controller, Control, FieldErrors } from "react-hook-form";
import { FieldPath } from "@type/field";

type Props = {
  column: any;
  control: Control<any>;
  errors: FieldErrors<any>;
};

export default function OriginalController({ column, control, errors }: Props) {
  if (!column.element) return null;

  const Element = column.element;
  const props = column.props;
  const name: FieldPath<any> = props.name;

  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <Element
          {...props}
          onChange={onChange}
          value={value}
          error={errors[name]}
        />
      )}
      name={name}
      control={control}
    />
  );
}
