import { Toggle, ToggleProps } from "@/components/Atoms";
import { Icon } from "../Icon";
import { SVG_File } from "@/types";

interface IconToggleProps extends ToggleProps {
  isToggle: boolean;
  asset: SVG_File;
  width?: string;
  label?: string;
  className?: string;
}

export function IconToggle({ isToggle, asset, width = "w-5", label = "", className = "", ...props }: IconToggleProps) {
  return (
    <Toggle
      {...props}
      className={`${className} p-1`}
      isToggle={isToggle}>
      <div className="aspect-square ">
        <Icon
          asset={asset}
          width={width}
        />
      </div>
      <span className="select-none">{label}</span>
    </Toggle>
  );
}
