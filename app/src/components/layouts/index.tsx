import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="pt-4">
          <div className="text-xl text-center">おさけデータベース</div>
        </div>
        <div className="p-10">{children}</div>
      </div>
    </>
  );
}
