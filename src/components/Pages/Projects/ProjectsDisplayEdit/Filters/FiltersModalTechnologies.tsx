import { Dispatch, SetStateAction } from "react";
import { Technology } from "@/types";
import { BorderedLabel } from "@/components/Compounds";
import { FiltersModalToggle } from "./FiltersModalToggle";

interface FiltersModalTechnologiesProps {
  title: string;
  technologies: Technology[];
  selectedFilters: string[];
  setSelectedFilters: Dispatch<SetStateAction<string[]>>;
}

export function FiltersModalTechnologies({
  title,
  technologies,
  selectedFilters,
  setSelectedFilters
}: FiltersModalTechnologiesProps) {
  const addFilter = (filter: string) => {
    setSelectedFilters((prevFilters) => [...prevFilters, filter]);
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((oldFilter) => oldFilter !== filter));
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <BorderedLabel label={title} />
      <div className="flex flex-wrap gap-2">
        {technologies
          .filter((technology) => technology.isFilter)
          .map(({ label, svg }, index) => {
            const isToggle = selectedFilters.includes(label);
            return (
              <FiltersModalToggle
                key={label + index}
                isToggle={isToggle}
                svg={svg}
                label={label}
                addFilter={addFilter}
                removeFilter={removeFilter}
              />
            );
          })}
      </div>
    </div>
  );
}
