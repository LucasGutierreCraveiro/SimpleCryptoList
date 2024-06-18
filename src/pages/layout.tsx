import { Outlet } from "react-router-dom";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col   ">
      <div className="text-2xl font-bold text-center">
        <span>Simple coin search</span>
      </div>
      <div>{children || <Outlet />}</div>
    </div>
  );
}
