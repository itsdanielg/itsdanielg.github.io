import { Image } from "../../Atoms";

export interface IconProps {
  fileName: string;
  width?: string;
  isRectangle?: boolean;
}

export function Icon({ fileName, width = "w-6", isRectangle = false }: IconProps) {
  const rectangleStyle = isRectangle ? "h-auto" : "aspect-square";
  const svg = `/svg/${fileName}.svg`;

  return (
    <div className={`${width} ${rectangleStyle}`}>
      <Image
        src={svg}
        alt={fileName}
      />
    </div>
  );
}
