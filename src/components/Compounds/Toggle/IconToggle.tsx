import { Toggle, ToggleProps } from "@/components/Atoms";
import { Icon } from "../Icon";
import { SVG_File } from "@/types";
import { twMerge } from "tailwind-merge";

interface IconToggleProps extends ToggleProps {
  isToggle: boolean;
  asset: SVG_File;
  label?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}

export function IconToggle({
  isToggle,
  asset,
  label = "",
  className = "",
  iconClassName = "",
  labelClassName = "",
  ...props
}: IconToggleProps) {
  return (
    <Toggle
      {...props}
      className={twMerge("p-1", className)}
      isToggle={isToggle}>
      <div className="aspect-square">
        <Icon
          className={twMerge("w-5", iconClassName)}
          asset={asset}
        />
      </div>
      <span className={twMerge("select-none", labelClassName)}>{label}</span>
    </Toggle>
  );
}
