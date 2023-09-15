import { twMerge } from "tailwind-merge";
import { SVG_ASSET } from "@/assets";
import { SVG_File } from "@/types";
import { Image } from "@/components/Atoms";

export interface IconProps {
  asset: SVG_File;
  isRectangle?: boolean;
  className?: string;
}

export function Icon({ asset, isRectangle = false, className = "" }: IconProps) {
  const rectangleStyle = isRectangle ? "w-full h-auto" : "w-5 aspect-square";

  return (
    <div className={twMerge(rectangleStyle, className)}>
      <Image
        src={SVG_ASSET[asset]}
        alt={asset}
      />
    </div>
  );
}
