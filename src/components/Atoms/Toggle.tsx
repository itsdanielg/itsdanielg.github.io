import { MouseEventHandler } from "react";
import { SVGIcon } from "../Compounds/SVGIcon";

interface ToggleProps {
  isToggle: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  svg?: string;
  svgWidth?: string;
  label?: string;
  className?: string;
}

export function Toggle({
  isToggle,
  onClick,
  svg = "",
  svgWidth = "w-5",
  label = "",
  className = "",
  ...props
}: ToggleProps) {
  const toggleStyle = isToggle ? "bg-blue-1-t text-white" : "bg-white";

  return (
    <button
      {...props}
      className={`${className} ${toggleStyle}  flex flex-col items-center gap-1 border-2 border-white-1 rounded-lg md:hover:border-black transition`}
      onClick={onClick}>
      <div className="aspect-square">
        <SVGIcon
          fileName={svg}
          width={svgWidth}
        />
      </div>
      <span className="select-none">{label}</span>
    </button>
  );
}
