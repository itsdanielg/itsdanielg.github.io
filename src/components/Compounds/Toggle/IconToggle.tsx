import { Toggle } from "@/components/Atoms";
import { Icon } from "../Icon";
import { SVG_File } from "@/types";

interface IconToggleProps {
  isToggle: boolean;
  name: SVG_File;
  width?: string;
  label?: string;
  className?: string;
}

export function IconToggle({ isToggle, name, width = "w-5", label = "", className = "", ...props }: IconToggleProps) {
  return (
    <Toggle
      {...props}
      className={`${className} p-1`}
      isToggle={isToggle}>
      <div className="aspect-square ">
        <Icon
          name={name}
          width={width}
        />
      </div>
      <span className="select-none">{label}</span>
    </Toggle>
  );
}
