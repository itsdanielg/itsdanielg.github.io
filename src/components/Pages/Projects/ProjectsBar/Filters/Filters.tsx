import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/Atoms";
import { FilterTag } from "./FilterTag";
import { FiltersModal } from "./FiltersModal";

interface FiltersProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export function Filters({ filters, setFilters }: FiltersProps) {
  const [show, setShow] = useState(false);

  const removeFilter = (filter: string) => {
    setFilters((prevFilters) => prevFilters.filter((oldFilter) => oldFilter !== filter));
  };

  return (
    <div className="flex items-center grow">
      <span className="pr-2 border-white-1 border-r text-white">Filters</span>
      <div className="flex items-center flex-wrap gap-2 pl-2">
        {filters.map((filter, index) => (
          <FilterTag
            key={filter + index}
            filter={filter}
            onClick={() => removeFilter(filter)}
          />
        ))}
        <Button onClick={() => setShow(true)}>Add Filter</Button>
        <FiltersModal
          show={show}
          filters={filters}
          setShow={setShow}
          setFilters={setFilters}
        />
      </div>
    </div>
  );
}
