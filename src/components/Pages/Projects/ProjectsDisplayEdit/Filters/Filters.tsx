import { Dispatch, SetStateAction, useState } from "react";
import { FilterTag } from "./FilterTag";
import { FiltersModal } from "./FiltersModal";
import { Button } from "../../../../Atoms/Button";

interface FiltersProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export function Filters({ filters, setFilters }: FiltersProps) {
  const [show, setShow] = useState(false);

  const addFilter = (filter: string) => {
    setFilters((prevFilters) => [...prevFilters, filter]);
  };

  const removeFilter = (filter: string) => {
    setFilters((prevFilters) => prevFilters.filter((oldFilter) => oldFilter !== filter));
  };

  return (
    <div className="flex items-center grow">
      <span className="pr-2 border-white-1 border-r text-white">Filters</span>
      <div className="flex flex-wrap gap-2 pl-2">
        {filters.map((filter, index) => (
          <FilterTag
            key={filter + index}
            filter={filter}
            onClick={() => removeFilter(filter)}
          />
        ))}
        <Button
          className="text-blue-1 md:hover:text-white transition"
          label="Add Filter"
          onClick={() => setShow(true)}
        />
        {show && (
          <FiltersModal
            show={show}
            filters={filters}
            setShow={setShow}
            setFilters={setFilters}
          />
        )}
      </div>
    </div>
  );
}
