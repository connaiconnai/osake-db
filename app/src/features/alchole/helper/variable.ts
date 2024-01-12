export function getGenre(id: string) {
  const genres: any = {
    1: "日本酒",
    2: "ワイン",
  };
  return genres[id];
}
