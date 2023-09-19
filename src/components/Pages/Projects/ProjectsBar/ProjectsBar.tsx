import { Dispatch, SetStateAction } from "react";
import { IconToggle } from "@/components/Compounds";
import { Filters } from "./Filters";

interface ProjectsBarProps {
  filters: string[];
  isGrid: boolean;
  setFilters: Dispatch<SetStateAction<string[]>>;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export function ProjectsBar({ filters, isGrid, setFilters, setIsGrid }: ProjectsBarProps) {
  return (
    <div className="flex items-center gap-4 w-full p-4 bg-black-1-t rounded-md">
      <Filters
        filters={filters}
        setFilters={setFilters}
      />
      <div className="flex gap-2">
        <IconToggle
          isToggle={isGrid}
          asset="grid"
          onClick={() => setIsGrid(true)}
        />
        <IconToggle
          isToggle={!isGrid}
          asset="list"
          onClick={() => setIsGrid(false)}
        />
      </div>
    </div>
  );
}
