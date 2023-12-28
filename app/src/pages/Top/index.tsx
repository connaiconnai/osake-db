import { List } from "@features/alchole/index";

export default function TopPage() {
  return (
    <>
      <div className="text-xl">お酒一覧</div>
      <div className="px-10">
        <List />
      </div>
    </>
  );
}
