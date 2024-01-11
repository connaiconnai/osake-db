export type ColumnType = {
  key: string;
  element: React.FC;
  props: {
    placeholder: string;
    name: string;
  };
};
