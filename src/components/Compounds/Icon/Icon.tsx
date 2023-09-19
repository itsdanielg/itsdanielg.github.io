import { twMerge } from "tailwind-merge";
import { SVG_File } from "@/types";
import { SVGAsset } from "@/components/Compounds";

export interface IconProps {
  asset: SVG_File;
  isRectangle?: boolean;
  className?: string;
}

export function Icon({ asset, isRectangle = false, className = "" }: IconProps) {
  const rectangleStyle = isRectangle ? "w-full h-auto" : "w-5 aspect-square";

  return (
    <div className={twMerge(rectangleStyle, className)}>
      <SVGAsset asset={asset} />
    </div>
  );
}
