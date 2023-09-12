import { SVG } from "Assets/";
import { svgFile } from "Types/";
import { Image } from "Atoms/";

export interface IconProps {
  fileName: svgFile;
  width?: string;
  isRectangle?: boolean;
}

export function Icon({ fileName, width = "w-6", isRectangle = false }: IconProps) {
  const rectangleStyle = isRectangle ? "h-auto" : "aspect-square";

  return (
    <div className={`${width} ${rectangleStyle}`}>
      <Image
        src={SVG[fileName]}
        alt={fileName}
      />
    </div>
  );
}
