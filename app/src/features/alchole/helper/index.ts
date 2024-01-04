import alcholeData from "@jsonData/alchole.json";

export const fetchAlcholeData = (uid = "") => {
  if (uid) {
    const data = alcholeData;
    return data.find((data) => data.alchole_uid === uid);
  }
  return alcholeData;
};
