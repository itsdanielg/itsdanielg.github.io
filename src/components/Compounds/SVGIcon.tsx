import { useSVG } from "../../hooks/useSVG";
import { Image } from "../Atoms/Image";

export interface SVGIconProps {
  fileName: string;
  width?: string;
}

export function SVGIcon({ fileName, width = "w-5" }: SVGIconProps) {
  const svg = useSVG("icons", fileName);

  return (
    <div className={`${width} aspect-square`}>
      <Image
        src={svg}
        alt={fileName}
      />
    </div>
  );
}
