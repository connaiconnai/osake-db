import { TextField } from "@ui-parts/index";
const columns = [
  {
    key: "alchole_name",
    element: TextField,
    props: {
      placeholder: "お酒名",
      name: "alchole_name",
    },
  },
  {
    key: "genre_id",
    element: TextField,
    props: {
      placeholder: "ジャンル",
      name: "genre_id",
    },
  },
  {
    key: "image",
    element: TextField,
    props: {
      placeholder: "画像パス",
      name: "image",
    },
  },
  {
    key: "label",
    element: TextField,
    props: {
      placeholder: "ラベルタイトル",
      name: "label",
    },
  },
  {
    key: "label_value",
    element: TextField,
    props: {
      placeholder: "ラベル値",
      name: "label_value",
    },
  },
  {
    key: "author",
    element: TextField,
    props: {
      placeholder: "記入者",
      name: "author",
    },
  },
  {
    key: "content",
    element: TextField,
    props: {
      placeholder: "レビュー内容",
      name: "content",
    },
  },
];

export default columns;
