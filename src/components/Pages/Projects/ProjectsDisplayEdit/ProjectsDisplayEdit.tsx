import { Dispatch, SetStateAction } from "react";
import { Filters } from "./Filters/Filters";
import { Toggle } from "../../../Atoms/Toggle";

interface ProjectsDisplayEditProps {
  filters: string[];
  isGrid: boolean;
  setFilters: Dispatch<SetStateAction<string[]>>;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export function ProjectsDisplayEdit({ filters, isGrid, setFilters, setIsGrid }: ProjectsDisplayEditProps) {
  return (
    <div className="flex items-center gap-4 w-full p-4 bg-black-1-t rounded-md">
      <Filters
        filters={filters}
        setFilters={setFilters}
      />
      <div className="flex gap-2">
        <Toggle
          className="p-1 border-none"
          isToggle={isGrid}
          onClick={() => setIsGrid(true)}
          svg="grid"
        />
        <Toggle
          className="p-1 border-none"
          isToggle={!isGrid}
          onClick={() => setIsGrid(false)}
          svg="list"
        />
      </div>
    </div>
  );
}
