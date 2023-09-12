import { svgFile } from "@/types";
import { IconToggle } from "@/components/Compounds";

interface FiltersModalToggle {
  isToggle: boolean;
  svg: svgFile;
  label: string;
  addFilter: (label: string) => void;
  removeFilter: (label: string) => void;
}

export function FiltersModalToggle({ isToggle, svg, label, addFilter, removeFilter }: FiltersModalToggle) {
  return (
    <IconToggle
      className="p-2"
      isToggle={isToggle}
      svg={svg}
      svgWidth="w-8"
      label={label}
      onClick={() => {
        if (!isToggle) addFilter(label);
        else removeFilter(label);
      }}
    />
  );
}
