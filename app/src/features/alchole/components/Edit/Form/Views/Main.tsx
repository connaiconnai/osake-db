import { Controller } from "@ui-elements/index";
import { ColumnType } from "@type/column";
import { getMultiColumn } from "@util/columns";
import { PropsCommonType } from "./props.d";
import { columnsKeys } from "../columns";

export default function MainForm({ control, errors }: PropsCommonType) {
  const columns = getMultiColumn(columnsKeys);
  return (
    <div className="flex flex-col gap-4">
      {columns.map((column: ColumnType) => (
        <Controller
          key={column.key}
          column={column}
          control={control}
          errors={errors}
        />
      ))}
    </div>
  );
}
