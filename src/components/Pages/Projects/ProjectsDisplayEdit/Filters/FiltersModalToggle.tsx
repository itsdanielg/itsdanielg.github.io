import { IconToggle } from "@/components/Compounds";
import { SVG_File } from "@/types";

interface FiltersModalToggle {
  isToggle: boolean;
  svg: SVG_File;
  label: string;
  addFilter: (label: string) => void;
  removeFilter: (label: string) => void;
}

export function FiltersModalToggle({ isToggle, svg, label, addFilter, removeFilter }: FiltersModalToggle) {
  return (
    <IconToggle
      className="p-2"
      isToggle={isToggle}
      name={svg}
      width="w-8"
      label={label}
      onClick={() => {
        if (!isToggle) addFilter(label);
        else removeFilter(label);
      }}
    />
  );
}
