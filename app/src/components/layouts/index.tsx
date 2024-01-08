import { ReactNode } from "react";

const app_name = import.meta.env.VITE_APP_NAME;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="bg-header py-4">
          <div className="text-xl text-center">{app_name}</div>
        </div>
        <div className="p-10">{children}</div>
      </div>
    </>
  );
}
