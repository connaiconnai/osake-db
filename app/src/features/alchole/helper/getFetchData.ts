import { UseFetchDataValue } from "@functional/FetchData";
import { AlcholeType } from "@type/alchole";

export function getAlcholeData() {
  const alcholeData: AlcholeType[] = UseFetchDataValue();
  return alcholeData;
}

export function filterAlcholeData(uid: string | undefined) {
  const alcholeData: AlcholeType[] = getAlcholeData();
  const result = alcholeData.find(
    (data: AlcholeType) => data.alchole_uid === uid
  );
  return result;
}
