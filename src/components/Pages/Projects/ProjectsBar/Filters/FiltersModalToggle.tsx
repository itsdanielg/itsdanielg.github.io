import { IconToggle } from "@/components/Compounds";
import { SVG_File } from "@/types";

interface FiltersModalToggle {
  isToggle: boolean;
  asset: SVG_File;
  label: string;
  addFilter: (label: string) => void;
  removeFilter: (label: string) => void;
}

export function FiltersModalToggle({ isToggle, asset, label, addFilter, removeFilter }: FiltersModalToggle) {
  return (
    <IconToggle
      className="p-2"
      iconClassName="w-8"
      isToggle={isToggle}
      asset={asset}
      label={label}
      onClick={() => {
        if (!isToggle) addFilter(label);
        else removeFilter(label);
      }}
    />
  );
}
