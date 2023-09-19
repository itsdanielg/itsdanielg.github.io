import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { technologies } from "@/text";
import { Button } from "@/components/Atoms";
import { StandardModal } from "@/components/Compounds";
import { FiltersModalTechnologies } from "./FiltersModalTechnologies";

interface FiltersModalProps {
  show: boolean;
  filters: string[];
  setShow: Dispatch<SetStateAction<boolean>>;
  setFilters: Dispatch<SetStateAction<string[]>>;
}

export function FiltersModal({ show, filters, setShow, setFilters }: FiltersModalProps) {
  const [selectedFilters, setSelectedFilters] = useState(filters);

  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  const addFilters = () => {
    setFilters(selectedFilters);
  };

  return (
    <StandardModal
      className="flex flex-col w-full md:w-auto h-full md:h-auto overflow-hidden"
      show={show}
      setShow={setShow}>
      <div className="flex flex-col w-full h-full items-start gap-6 p-5 overflow-auto">
        <FiltersModalTechnologies
          title="Languages"
          technologies={technologies.languages}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <FiltersModalTechnologies
          title="Libraries / Frameworks"
          technologies={technologies.frameworks}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <FiltersModalTechnologies
          title="Software"
          technologies={technologies.software}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
      <div className="flex justify-end w-full p-6 border-t-2 md:border-none">
        <Button
          onClick={() => {
            setSelectedFilters([]);
            setShow(false);
          }}>
          Remove Filters
        </Button>
        <Button
          onClick={() => {
            addFilters();
            setShow(false);
          }}>
          Set Filters
        </Button>
      </div>
    </StandardModal>
  );
}
