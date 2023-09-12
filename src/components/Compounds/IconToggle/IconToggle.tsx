import { svgFile } from "@/types";
import { Toggle, ToggleProps } from "Atoms/";
import { Icon } from "Compounds/";

interface IconToggleProps extends ToggleProps {
  isToggle: boolean;
  svg: svgFile;
  svgWidth?: string;
  label?: string;
  className?: string;
}

export function IconToggle({ isToggle, svg, svgWidth = "w-5", label = "", className = "", ...props }: IconToggleProps) {
  return (
    <Toggle
      {...props}
      className={`${className} p-1`}
      isToggle={isToggle}>
      <div className="aspect-square ">
        <Icon
          fileName={svg}
          width={svgWidth}
        />
      </div>
      <span className="select-none">{label}</span>
    </Toggle>
  );
}
