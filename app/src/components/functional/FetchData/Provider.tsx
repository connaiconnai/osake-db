import { useSetRecoilState } from "recoil";
import { AlcholeType } from "@type/alchole";
import fetchDataAtom from "./atom";
import { fetchAlcholeData } from "./fetching";
import { callbackType } from "./callback.d";

export default function FetchDataProvider() {
  const setFetchData = useSetRecoilState(fetchDataAtom);
  const callback: callbackType = (resData: AlcholeType) => {
    setFetchData(resData);
  };
  fetchAlcholeData(callback);

  return null;
}
