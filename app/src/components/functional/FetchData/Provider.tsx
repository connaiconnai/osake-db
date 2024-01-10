import { useSetRecoilState } from "recoil";
import { alcholeType } from "@types/alchole";
import fetchDataAtom from "./atom";
import { fetchAlcholeData } from "./fetching";

export default function FetchDataProvider() {
  const setFetchData = useSetRecoilState(fetchDataAtom);
  const callback = (resData: alcholeType) => {
    setFetchData(resData);
  };
  fetchAlcholeData(callback);

  return null;
}
