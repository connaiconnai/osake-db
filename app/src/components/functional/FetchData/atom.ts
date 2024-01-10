import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

const fetchDataAtom = atom({
  key: "fetchDataInfo",
  default: [],
  effects_UNSTABLE: [persistAtom], //追加
});

export default fetchDataAtom;
