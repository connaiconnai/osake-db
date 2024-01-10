import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import FetchDataProvider from "./Provider";
export { FetchDataProvider };

import fetchDataAtom from "./atom";
const atom = fetchDataAtom;

export const UseFetchDataState = () => {
  return useRecoilState(atom);
};
export const UseFetchDataValue = () => {
  return useRecoilValue(atom);
};
export const UseSetFetchDataState = () => {
  return useSetRecoilState(atom);
};
