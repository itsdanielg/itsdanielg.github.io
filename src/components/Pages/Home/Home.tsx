import { Outlet } from "react-router-dom";
import { HomeCard } from "./HomeCard";

export function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <HomeCard />
      <Outlet />
    </div>
  );
}
