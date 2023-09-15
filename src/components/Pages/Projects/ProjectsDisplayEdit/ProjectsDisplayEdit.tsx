import { Dispatch, SetStateAction } from "react";
import { IconToggle } from "@/components/Compounds";
import { Filters } from "./Filters";

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
        <IconToggle
          isToggle={isGrid}
          name="grid"
          onClick={() => setIsGrid(true)}
        />
        <IconToggle
          isToggle={!isGrid}
          name="list"
          onClick={() => setIsGrid(false)}
        />
      </div>
    </div>
  );
}
