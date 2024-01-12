import { ColumnType } from "@type/column";
import columns from "./Columns";

export function getColumn(key: string) {
  const result = columns.find((column) => column.key === key);
  return result;
}

export function getMultiColumn(keys: string[]) {
  const result = columns.filter((column) => keys.includes(column.key));
  return result;
}

export function getArrayColumn(keys: string[], length: number = 0) {
  const columns_with_key = columns.filter((column) =>
    keys.includes(column.key)
  );

  let result: any = [columns_with_key];
  for (let i = 0; i < length; i++) {
    result = [...result, getAddedArrayColumn(result)];
  }
  return result;
}

export const getAddedArrayColumn: (
  columnsArray: ColumnType[][]
) => ColumnType[] = (columnsArray) => {
  const length = columnsArray.length;
  const next_index = length + 1;
  const origin_columns = columnsArray[0];
  const added_column = origin_columns.map((column) =>
    addIndexInKey(column, next_index)
  );
  return added_column;
};

const addIndexInKey = (column: ColumnType, next_index: number) => {
  return {
    ...column,
    key: column.key + next_index,
    props: {
      ...column.props,
      name: column.props.name + next_index,
    },
  };
};
