import { UseFetchDataValue } from "@functional/FetchData";
import { alcholeType } from "@type/alchole";

export function getAlcholeData() {
  const alcholeData: alcholeType[] = UseFetchDataValue();
  return alcholeData;
}

export function filterAlcholeData(uid: string | undefined) {
  const alcholeData: alcholeType[] = getAlcholeData();
  const result = alcholeData.find(
    (data: alcholeType) => data.alchole_uid === uid
  );
  return result;
}
