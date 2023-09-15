import { SVG_ASSET } from "@/assets";
import { SVG_File } from "@/types";
import { Image } from "@/components/Atoms";

export interface IconProps {
  name: SVG_File;
  width?: string;
  isRectangle?: boolean;
}

export function Icon({ name, width = "w-6", isRectangle = false }: IconProps) {
  const rectangleStyle = isRectangle ? "h-auto" : "aspect-square";

  return (
    <div className={`${width} ${rectangleStyle}`}>
      <Image
        src={SVG_ASSET[name]}
        alt={name}
      />
    </div>
  );
}
