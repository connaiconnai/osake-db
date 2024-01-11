import { useState } from "react";
import { Button } from "@mui/material";
import { Controller } from "@ui-elements/index";
import { getArrayColumn, getAddedArrayColumn } from "@util/columns";
import { getRandomKey } from "@util/variable";
import { ColumnType } from "@type/column";
import { PropsCommonType } from "./props.d";
import { labelsKeys } from "../columns";

type PropsType = PropsCommonType & {
  labelLength: number;
};

export default function LabelForm({ control, errors, labelLength }: PropsType) {
  const [columnsArray, setColumnsArray]: any = useState(
    getArrayColumn(labelsKeys, labelLength)
  );

  const onClick = () => {
    const addedArrayColumn = getAddedArrayColumn(columnsArray);
    setColumnsArray([...columnsArray, addedArrayColumn]);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {columnsArray.map((columns: ColumnType[]) => (
          <div className="flex gap-4" key={getRandomKey()}>
            {columns.map((column: ColumnType) => (
              <Controller
                key={column.key}
                column={column}
                control={control}
                errors={errors}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="">
        <Button variant="outlined" onClick={onClick}>
          add label
        </Button>
      </div>
    </>
  );
}
